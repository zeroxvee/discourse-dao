"use client";
import { Metadata } from "next";
import {
	useExploreProfiles,
	useWalletLogin,
	useWalletLogout,
	useActiveProfile,
} from "@lens-protocol/react-web";
import Link from "next/link";
import { ColorRing, Triangle } from "react-loader-spinner";
import MoonLoader from "react-spinners/MoonLoader";
import Header from "@/components/Header";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Spinner } from "@/components/Spinner";
import DiscourseFeed from "@/components/DiscourseFeed";

// export const metadata: Metadata = {
// 	title: "Discourse DAO",
// 	description: "DAO powered discourse incentives",
// };

export default function Home() {
	const { execute: login, isPending: isLoginPending } = useWalletLogin();
	const { execute: logout } = useWalletLogout();
	const { data: wallet, loading } = useActiveProfile();
	const { isConnected } = useAccount();
	const { disconnectAsync } = useDisconnect();

	const { data: profiles, error } = useExploreProfiles({
		limit: 25,
	});

	const { connectAsync } = useConnect({
		connector: new InjectedConnector(),
	});

	const onLoginClick = async () => {
		if (isConnected) {
			await disconnectAsync();
		}

		const { connector } = await connectAsync();

		if (connector instanceof InjectedConnector) {
			const walletClient = await connector.getWalletClient();

			await login({
				address: walletClient.account.address,
			});
		}
	};

	return (
		<>
			<Header />
			<div className="p-20 bg-white">
				<h1 className="text-5xl">My Lens App</h1>
				{!profiles || loading ? (
					<div className="flex justify-center items-center">
						<Spinner />
					</div>
				) : (
					// 	profiles?.map((profile, index) => (
					// 		<Link href={`/profile/${profile.handle}`} key={index}>
					// 			<div className="my-14">
					// 				{profile.picture &&
					// 				profile.picture.__typename === "MediaSet" ? (
					// 					<img
					// 						src={profile.picture.original.url}
					// 						width="120"
					// 						height="120"
					// 						alt={profile.handle}
					// 					/>
					// 				) : (
					// 					<div className="w-14 h-14 bg-slate-500	" />
					// 				)}
					// 				<h3 className="text-3xl my-4">{profile.handle}</h3>
					// 				<p className="text-xl">{profile.bio}</p>
					// 			</div>
					// 		</Link>
					// 	))
					// )
					<DiscourseFeed />
				)}
			</div>
		</>
	);
}
