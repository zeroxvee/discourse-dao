import React from "react";
import Image from "next/image";
import placeholder from "../../public/placeholder.svg";
import { GrClose } from "react-icons/gr";
import { useContractWrite } from "wagmi";
import discourseDaoAbi from "../../abi/discourseDaoAbi.json";
import { ethers } from "ethers";
import { ether, useActiveProfile } from "@lens-protocol/react-web";

export const MembershipBidView = ({ closeModal }) => {
	const { data: wallet, loading } = useActiveProfile();
	// const {
	// 	data: membership,
	// 	isError,
	// 	isLoading,
	// } = useContractRead({
	// 	address: "0x5a87068218B8D8659D26fa67D9502093B4fA5FB1",
	// 	abi: discourseDaoAbi,
	// 	functionName: "totalSupply",
	// });

	// const {
	// 	data,
	// 	isLoading,
	// 	isSuccess,
	// 	write: buyMembership,
	// } = useContractWrite({
	// 	address: "0x5a87068218B8D8659D26fa67D9502093B4fA5FB1",
	// 	abi: discourseDaoAbi,
	// 	functionName: "purchase",
	// 	args: [
	// 		ethers.utils.parseEther("0.005"),
	// 		wallet?.ownedBy,
	// 		"0xA7F1653E99CdE8f76839C70c64122456AFA5Cf6E",
	// 		ethers.constants.AddressZero,
	// 		"0x",
	// 	],
	// 	value: ethers.utils.parseEther("0.005"),
	// });

	// Initialize the ethers provider
	const provider = new ethers.providers.JsonRpcProvider(
		"https://polygon-mumbai.g.alchemy.com/v2/RHEW0--ZNQsA9pPUGD26h05L-zHpks-l"
	);

	// Get the signer (your wallet)
	const signer = provider.getSigner();

	// Create the contract instance
	const discourseDaoContract = new ethers.Contract(
		"0x5a87068218B8D8659D26fa67D9502093B4fA5FB1",
		discourseDaoAbi,
		signer
	);

	const handleClick = async () => {
		// buyMembership();
		// Create the transaction
		try {
			const transaction = await discourseDaoContract.purchase(
				ethers.utils.parseEther("0.005"),
				wallet?.ownedBy, // Replace this with the actual wallet address if 'wallet' object is not defined
				"0xA7F1653E99CdE8f76839C70c64122456AFA5Cf6E",
				ethers.constants.AddressZero,
				"0x",
				{
					value: ethers.utils.parseEther("0.005"),
				}
			);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center gap-3 p-2">
			<div onClick={closeModal} className="flex w-full items-start">
				<GrClose className="w-6 h-6 cursor-pointer" color="#272E29" />
			</div>
			<Image
				className="w-[80px] h-[80px] mb-6"
				alt="Image"
				src={placeholder}
				objectFit="contain"
			/>
			<div className="inline-flex items-start gap-3">
				<div className="inline-flex flex-col items-start">
					<div className="w-full font-semibold text-black text-xl">
						Current bid
					</div>
				</div>
				<div className="inline-flex flex-col items-end">
					<div className="w-full font-semibold text-[#00000099] text-xl">
						0.02 ETH
					</div>
				</div>
			</div>
			<div>
				<button
					onClick={handleClick}
					className="w-full rounded-lg font-semibold text-black text-xl border border-green-300 py-2 px-4">
					Confirm
				</button>
			</div>
		</div>
	);
};
