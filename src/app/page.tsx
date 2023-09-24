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
import ProposeCard from "@/components/ProposeCampaignCard";
import MembershipAuction from "@/components/MembershipAuction";

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
				{!wallet || loading ? (
					<div className="flex justify-center items-center">
						<Spinner />
					</div>
				) : (
					<div className="container mx-auto">
						<MembershipAuction />
					</div>
				)}
			</div>
		</>
	);
}
