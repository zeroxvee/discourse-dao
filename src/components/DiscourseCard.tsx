import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import ModalContainer from "./ModalContainer";
import CampaignView from "./CampaignView";

const DiscourseCard = ({ speaker1, speaker2 }) => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const speaker1Image =
		speaker1 && speaker1.picture?.__typename === "MediaSet"
			? speaker1.picture.original.url
			: "";

	const speaker2Image =
		speaker2 && speaker2.picture?.__typename === "MediaSet"
			? speaker2.picture.original.url
			: "";

	return (
		<div
			onClick={openModal}
			className="flex w-full items-center justify-center gap-[10px] p-3 relative rounded-[12px] overflow-hidden border-2 border-solid border-black">
			<div className="inline-flex flex-col items-center justify-center gap-1">
				<RiArrowUpSLine color="green" size={36} />
				<div className="relative w-fit font-medium text-black text-2xl tracking-[0] leading-[normal]">
					20
				</div>
				<RiArrowDownSLine color="red" size={36} />
			</div>
			<div className="inline-flex flex-col items-start gap-[10px] p-[10px]">
				<div className="inline-flex items-center justify-center gap-[10px] p-[10px]">
					<div className="inline-flex items-start">
						<img
							className="w-14 h-14 rounded-full"
							alt="Image"
							src={speaker1Image}
						/>
						<img
							className="-ml-2 w-14 h-14 rounded-full"
							alt="Image"
							src={speaker2Image}
						/>
					</div>
					<div className="inline-flex flex-col items-start gap-[10px] p-[10px]">
						<div className="relative w-fit font-medium text-black text-[30px] tracking-[0] leading-[normal]">
							Daniel F.
						</div>
						<div className="relative w-fit font-medium text-black text-[30px] tracking-[0] leading-[normal]">
							Vlad B.
						</div>
					</div>
				</div>
				<p className="relative w-[303px] font-bold text-black text-[24px] tracking-[0] leading-[normal]">
					Public goods for local communities
				</p>
				<div className="flex w-[351px] items-center justify-center gap-[10px] p-[10px]">
					<div className="relative w-fit font-semibold text-black text-xl tracking-[0] leading-[normal]">
						Ask
					</div>
					<div className="inline-flex items-start gap-[10px] p-[10px]">
						<div className="relative w-fit font-semibold text-black text-xl tracking-[0] leading-[normal]">
							0.6
						</div>
						<div className="relative w-fit font-semibold text-black text-xl tracking-[0] leading-[normal]">
							ETH
						</div>
					</div>
				</div>
				<ModalContainer isOpen={isOpen} closeModal={closeModal}>
					<CampaignView closeModal={closeModal} />
				</ModalContainer>
			</div>
		</div>
	);
};

export default DiscourseCard;
