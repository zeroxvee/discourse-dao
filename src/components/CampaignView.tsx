import React from "react";
import { GrClose } from "react-icons/gr";

const CampaignView = ({ closeModal }) => {
	return (
		<div className="inline-flex flex-col items-start gap-[25px] p-[10px] relative bg-white">
			<div className="flex w-[458px] items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
				<GrClose size={22} color="#272E29" />
			</div>
			<div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="inline-flex items-start relative flex-[0_0_auto]">
					<img
						className="relative w-[100px] h-[100px] object-cover"
						alt="Image"
						src="image-3.png"
					/>
					<img
						className="ml-[-50px] relative w-[100px] h-[100px] object-cover"
						alt="Image"
						src="image-4.png"
					/>
				</div>
				<div className="inline-flex flex-col items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
					<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[30px] tracking-[0] leading-[normal]">
						Daniel F.
					</div>
					<div className="relative w-fit [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[30px] tracking-[0] leading-[normal]">
						Vlad B.
					</div>
				</div>
			</div>
			<div className="inline-flex flex-col items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
					30 votes
				</div>
				<div className="inline-flex items-start gap-[25px] px-0 py-[10px] relative flex-[0_0_auto] bg-white">
					<div className="flex w-[128px] items-center justify-center gap-[10px] px-[10px] py-0 relative bg-variable-collection-deep-green rounded-[12px] overflow-hidden">
						<div className="text-white text-[32px] relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium tracking-[0] leading-[normal]">
							yes
						</div>
					</div>
					<div className="inline-flex items-center justify-center gap-[20px] relative flex-[0_0_auto]">
						<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
							66%
						</div>
					</div>
					<div className="inline-flex items-center justify-center gap-[20px] relative flex-[0_0_auto]">
						<div className="flex w-[128px] items-center justify-center gap-[10px] px-[10px] py-0 relative bg-[#e40536] rounded-[12px] overflow-hidden">
							<div className="[font-family:'Nunito-Medium',Helvetica] font-medium text-white text-[32px] relative w-fit mt-[-1.00px] tracking-[0] leading-[normal]">
								no
							</div>
						</div>
						<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
							33%
						</div>
					</div>
				</div>
			</div>
			<div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
				<p className="relative w-[558px] mt-[-1.00px] [font-family:'Nunito-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
					Public goods for local communities
				</p>
				<p className="relative w-[777px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
					Dive into the vital role shared resources play in enhancing community
					well-being and cohesion. From parks to clean air, these assets act as
					community pillars, promoting social interaction and impact. This
					discourse explores their impact, challenges in maintenance and
					distribution, and the future of these communal treasures.
				</p>
			</div>
			<div className="inline-flex flex-col items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="inline-flex flex-col items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
					<div className="[font-family:'Nunito-SemiBold',Helvetica] font-semibold text-black text-[36px] relative w-fit mt-[-1.00px] tracking-[0] leading-[normal]">
						Ask
					</div>
					<div className="inline-flex items-start gap-[50px] p-[10px] relative flex-[0_0_auto] bg-white">
						<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00000099] text-[36px] tracking-[0] leading-[normal]">
							0.6
						</div>
						<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00000099] text-[36px] tracking-[0] leading-[normal]">
							ETH
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-[777px] items-center justify-center gap-[50px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="inline-flex items-center justify-center gap-[25px] p-[10px] relative flex-[0_0_auto] bg-white">
					<div className="relative w-[68px] h-[68px] bg-[#d9d9d9] rounded-[34px] border-[5px] border-solid border-black">
						<div className="relative w-[34px] h-[34px] top-[11px] left-[12px] bg-black rounded-[17px]" />
					</div>
					<div className="inline-flex items-center justify-center gap-[20px] relative flex-[0_0_auto]">
						<div className="text-black text-[36px] relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium tracking-[0] leading-[normal]">
							Yes
						</div>
					</div>
				</div>
				<div className="inline-flex items-center justify-center gap-[25px] p-[10px] relative flex-[0_0_auto] bg-white">
					<div className="relative w-[68px] h-[68px] bg-[#d9d9d9] rounded-[34px] border-[5px] border-solid border-black" />
					<div className="inline-flex items-center justify-center gap-[20px] relative flex-[0_0_auto]">
						<div className="[font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[36px] relative w-fit mt-[-1.00px] tracking-[0] leading-[normal]">
							No
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-[777px] items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="flex w-[268px] items-center justify-center gap-[10px] p-[10px] relative bg-variable-collection-dark-lavender rounded-[12px] overflow-hidden">
					<div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[36px] tracking-[0] leading-[normal]">
						Vote
					</div>
				</div>
			</div>
		</div>
	);
};

export default CampaignView;
