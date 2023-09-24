"use client";
import { useActiveProfile } from "@lens-protocol/react-web";
import Header from "@/components/Header";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Spinner } from "@/components/Spinner";
import DiscourseFeed from "@/components/DiscourseFeed";
import ProposeCard from "@/components/ProposeCampaignCard";
import MembershipAuction from "@/components/MembershipAuction";

export default function CampaignsPage() {
	const { data: wallet, loading } = useActiveProfile();
	const { isConnected } = useAccount();
	const { disconnectAsync } = useDisconnect();

	const { connectAsync } = useConnect({
		connector: new InjectedConnector(),
	});

	const onLoginClick = async () => {};

	return (
		<>
			<Header />
			<div className="p-20 bg-white">
				{!wallet && loading ? (
					<div className="flex justify-center items-center">
						<Spinner />
					</div>
				) : (
					<div className="container mx-auto">
						<ProposeCard />
						<DiscourseFeed />
					</div>
				)}
			</div>
		</>
	);
}
