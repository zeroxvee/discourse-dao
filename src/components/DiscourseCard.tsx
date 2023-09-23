import React from "react";
import { useProfile } from "@lens-protocol/react-web";

const DiscourseCard = ({ speaker1, speaker2 }) => {
	const speaker1Image =
		speaker1 && speaker1.picture?.__typename === "MediaSet"
			? speaker1.picture.original.url
			: "";

	const speaker2Image =
		speaker2 && speaker2.picture?.__typename === "MediaSet"
			? speaker2.picture.original.url
			: "";

	return (
		<div className="inline-flex flex-col items-start gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white rounded-[12px] border-2 border-solid border-black">
			<div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="inline-flex items-start relative flex-[0_0_auto]">
					<img
						className="relative w-14 h-14 object-cover rounded-full"
						alt="Image"
						src={speaker1Image}
					/>
					<img
						className="-ml-5 relative w-14 h-14 object-cover rounded-full"
						alt="Image"
						src={speaker2Image}
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
			<p className="relative w-fit [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
				Public goods for local communities
			</p>
			<div className="inline-flex items-center justify-center gap-[25px] p-[10px] relative flex-[0_0_auto] bg-white">
				<div className="relative w-fit [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
					23 votes
				</div>
				<div className="flex w-[231px] h-[69px] items-center justify-center gap-[10px] p-[10px] relative rounded-[12px] overflow-hidden border border-solid border-black">
					<div className="relative w-fit [font-family:'Nunito-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
						Endorse
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiscourseCard;
