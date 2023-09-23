"use client";
import { LensProvider } from "@lens-protocol/react-web";

export default function LensWrapper({ config, children }) {
	return <LensProvider config={config}>{children}</LensProvider>;
}
