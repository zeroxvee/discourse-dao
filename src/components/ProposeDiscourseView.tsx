import React from "react";
import { GrClose } from "react-icons/gr";
const ProposeCampaignView = ({ closeModal }) => {
	const handleOnChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className="flex flex-col gap-4 bg-white">
			<div className="flex px-2 w-full items-start bg-white">
				<GrClose
					className="w-6 h-6 cursor-pointer"
					color="#272E29"
					onClick={closeModal}
				/>
			</div>
			<h2 className="text-2xl font-bold text-center text-black">
				Propose a Campaign
			</h2>
			<div className="flex flex-col items-start gap-4 p-3 self-stretch w-full bg-white">
				<div className="w-full font-semibold text-black text-xl">Title</div>
				<input className="w-full text-gray-800 pl-2 h-12 bg-[#f4f5fb] rounded-xl" />
			</div>
			<div className="flex flex-col w-full items-start gap-5 p-3 bg-white">
				<div className="flex w-full flex-col items-start gap-4 bg-white">
					<div className="w-full font-semibold text-black text-xl">
						Speaker 1
					</div>
					<input
						className="w-full pl-2 text-gray-800 h-12 bg-[#f4f5fb] rounded-xl"
						onChange={handleOnChange}
					/>
				</div>
				<div className="w-full flex flex-col items-start gap-4 bg-white">
					<div className="w-full font-semibold text-black text-xl">
						Speaker 2
					</div>
					<input
						className="w-full h-12 text-gray-800 pl-2 bg-[#f4f5fb] rounded-xl"
						onChange={handleOnChange}
					/>
				</div>
				<div className="w-full flex flex-col items-start gap-4 bg-white">
					<div className="w-full font-semibold text-black text-xl">
						Set Funding Goal
					</div>
					<span className="text-gray-800 flex gap-1 items-center text-2xl">
						<input
							placeholder="0.02"
							className="pl-2 w-1/2 text-gray-800 h-12 bg-[#f4f5fb] rounded-xl"
							onChange={handleOnChange}
						/>
						ETH
					</span>
				</div>
			</div>
			<div className="inline-flex flex-col items-start gap-4 p-3 bg-white">
				<div className="w-full font-semibold text-black text-xl">
					Description
				</div>
				<textarea className="w-full pl-2 h-24 text-gray-800 bg-[#f4f5fb] rounded-xl" />
			</div>
			<div className="flex w-full items-center justify-center gap-4 p-3 bg-dark-forest rounded-xl overflow-hidden">
				<button className="w-full border border-green-300 rounded-lg py-2 px-4 font-medium text-black text-xl">
					Submit
				</button>
			</div>
		</div>
	);
};

export default ProposeCampaignView;
