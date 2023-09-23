import React from "react";
import { useProfile } from "@lens-protocol/react-web";
import DiscourseCard from "./DiscourseCard";

const DiscourseFeed = () => {
	const { data: speaker1 } = useProfile({
		handle: "zeroxvee.lens",
	});

	const {
		data: speaker2,
		loading,
		error,
	} = useProfile({
		handle: "plebsant.lens",
	});

	return (
		<div className="inline-flex items-start gap-[25px] p-[10px] relative bg-white">
			{[1, 2, 3].map((i) => (
				<DiscourseCard key={i} speaker1={speaker1} speaker2={speaker2} />
			))}
		</div>
	);
};

export default DiscourseFeed;
