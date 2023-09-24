import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import ProposeCampaignView from "./ProposeDiscourseView";

export const ProposeCampaignCard = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<div className="flex flex-col w-full items-start gap-[10px] p-[10px] relative bg-white">
			<div className="inline-flex items-center justify-center gap-[750px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="inline-flex items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
					<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-black text-[48px] tracking-[0] leading-[normal]">
						Campaigns
					</div>
				</div>
				<div className="flex w-[268px] items-center justify-center gap-[10px] p-[10px] relative bg-dark-forest rounded-[12px] overflow-hidden">
					<button
						onClick={openModal}
						className="rounded-lg border border-green-500 py-2 px-6 relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[36px] tracking-[0] leading-[normal]">
						Propose
					</button>
				</div>
			</div>
			<div className="inline-flex items-start gap-[5px] pl-[25px] pr-[10px] py-[10px] relative flex-[0_0_auto] bg-white">
				<p className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
					Propose experts to engage in dialogue
				</p>
			</div>
			<ModalContainer isOpen={isOpen} closeModal={closeModal}>
				<ProposeCampaignView closeModal={closeModal} />
			</ModalContainer>
		</div>
	);
};

export default ProposeCampaignCard;
