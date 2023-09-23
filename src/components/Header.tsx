import Image from "next/image";
import {
	useWalletLogin,
	useWalletLogout,
	useActiveProfile,
} from "@lens-protocol/react-web";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Spinner } from "@/components/Spinner";
import logo from "../../public/logo.svg";
import Link from "next/link";

const Header = () => {
	const { execute: login, isPending: isLoginPending } = useWalletLogin();
	const { execute: logout } = useWalletLogout();
	const { data: wallet, loading } = useActiveProfile();
	const { isConnected } = useAccount();
	const { disconnectAsync } = useDisconnect();

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
		<header className="bg-gray-600">
			<div className="container mx-auto flex items-center justify-between">
				{/* Logo and Project Name */}
				<Link href={"/"} className="flex items-center space-x-2">
					<Image src={logo} alt="Logo" className="w-8 h-8" />
					<span className="text-white text-lg font-semibold">
						Discourse DAO
					</span>
				</Link>

				{/* Text Links */}
				<div className="hidden md:flex space-x-4">
					<a
						href="#"
						className="text-white hover:text-purple-200 transition ease-in-out duration-150">
						Showcase
					</a>
					<a
						href="#"
						className="text-white hover:text-purple-200 transition ease-in-out duration-150">
						Campaigns
					</a>
				</div>

				{/* Login Button */}
				<div className="flex flex-col items-center py-2">
					{!wallet && loading && (
						<button
							className="px-6 py-1 bg-white text-black rounded min-w-[110px] items-center"
							disabled={isLoginPending}
							onClick={onLoginClick}>
							<Spinner classNames="w-6 h-6" />
						</button>
					)}

					{!wallet && !loading && (
						<button
							className="px-6 py-1 bg-white text-black rounded"
							disabled={isLoginPending}
							onClick={onLoginClick}>
							Sign in with Lens
						</button>
					)}

					{wallet && !loading && (
						<div className="flex gap-1 items-center">
							<h3 className="text-lg">{wallet.handle}</h3>
							<div className="w-8 h-8 relative rounded-full">
								<Image
									className="rounded-full"
									src={
										wallet.picture && wallet.picture.__typename === "MediaSet"
											? wallet.picture.original.url
											: ""
									}
									alt="Profile Image"
									fill={true}
									objectFit="contain"
								/>
							</div>
							<button
								onClick={logout}
								className="px-6 py-1 bg-white text-black rounded">
								Sign out
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
