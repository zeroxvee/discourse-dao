import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import placeholder from "../../public/placeholder.svg";
import Image from "next/image";
import ModalContainer from "./ModalContainer";
import { MembershipBidView } from "./MembershipBidView";
import discourseDaoAbi from "../../abi/discourseDaoAbi.json";
import moment from "moment";

const MembershipAuction = () => {
	let [isOpen, setIsOpen] = useState(false);
	const {
		data: membershipCount,
		isError,
		isLoading,
	} = useContractRead({
		address: "0x5a87068218B8D8659D26fa67D9502093B4fA5FB1",
		abi: discourseDaoAbi,
		functionName: "totalSupply",
	});

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const [countdown, setCountdown] = useState(60 * 46);

	// Use useEffect to set up an interval that decrements the countdown
	useEffect(() => {
		// Check if the countdown has reached zero
		if (countdown <= 0) {
			return;
		}

		// Set up an interval to decrement the countdown
		const timerId = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		// Clear the interval when the component unmounts or when the countdown reaches zero
		return () => clearInterval(timerId);
	}, [countdown]);

	const formattedTime = moment
		.utc(moment.duration(countdown, "seconds").asMilliseconds())
		.format("mm:ss");

	return (
		<div className="flex items-center justify-evenly p-[10px]">
			<div className="inline-flex items-start gap-[10px] p-[10px] ">
				<div className="inline-flex items-start gap-[10px] p-12 bg-green-50 rounded-sm">
					<Image
						className=" w-[300px] h-[300px]"
						alt="Image"
						src={placeholder}
						objectFit="contain"
					/>
				</div>
			</div>
			<div className="inline-flex flex-col items-center justify-center gap-[10px] p-[10px] ">
				<div className="inline-flex flex-col items-start gap-[50px] p-[10px] ">
					<div className=" w-fit font-bold text-black text-4xl">
						Membership {Number(membershipCount) ?? "0"}
					</div>
				</div>
				<div className="inline-flex flex-col items-start gap-[10px] p-[10px] ">
					<div className="inline-flex items-start justify-end gap-8 p-[10px] ">
						<div className="inline-flex flex-col items-end justify-end gap-3 p-[10px] ">
							<div className=" w-fit font-semibold text-black text-2xl">
								Current bid
							</div>
							<div className="inline-flex flex-col items-end justify-end gap-[10px] ">
								<div className=" w-fit text-gray-500 text-2xl">.06 ETH</div>
							</div>
						</div>

						{/* Separator*/}
						<div className="border h-[140px]" />

						<div className="inline-flex flex-col items-center justify-center gap-[10px] p-[10px] ">
							<div className=" w-fit font-semibold text-black text-2xl">
								Auction ends in
							</div>
							<div className=" w-fit text-gray-500 text-2xl">
								{formattedTime}
							</div>
						</div>
					</div>
				</div>
				<div className="inline-flex items-start gap-3 p-[10px] w-full">
					<div className="flex w-full items-center gap-[10px] pl-[35px] pr-[10px] py-[10px]  bg-gray-300 rounded-lg">
						<input
							placeholder="0.02 ETH"
							className=" rounded-md w-fit bg-gray-300 font-semibold text-black text-2xl"
						/>
					</div>
					<div className="inline-flex items-start gap-[10px] p-[10px] w-full bg-black rounded-[12px] overflow-hidden">
						<button
							onClick={openModal}
							className=" w-full font-semibold text-gray-300 text-2xl">
							Place bid
						</button>
					</div>
				</div>
				<ModalContainer isOpen={isOpen} closeModal={closeModal}>
					<MembershipBidView closeModal={closeModal} />
				</ModalContainer>
			</div>
		</div>
	);
};

export default MembershipAuction;
