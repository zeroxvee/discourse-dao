"use client";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import { polygonMumbai, polygon } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { LensProvider, LensConfig, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

const publicSans = Public_Sans({ subsets: ["latin"] });

const { publicClient, webSocketPublicClient } = configureChains(
	[polygonMumbai, polygon],
	[publicProvider()]
);

const config = createConfig({
	autoConnect: true,
	publicClient,
	webSocketPublicClient,
	connectors: [
		new InjectedConnector({
			options: {
				shimDisconnect: false,
			},
		}),
	],
});

const lensConfig: LensConfig = {
	bindings: wagmiBindings(),
	environment: production,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<WagmiConfig config={config}>
				<LensProvider config={lensConfig}>
					<body className={publicSans.className}>{children}</body>
				</LensProvider>
			</WagmiConfig>
		</html>
	);
}
