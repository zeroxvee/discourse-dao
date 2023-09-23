import clsx from "clsx";

export function Spinner({ classNames }: { classNames?: string }) {
	return (
		<div
			className={clsx(
				classNames ? classNames : "w-12 h-12",
				"inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.4em] text-green-400 motion-reduce:animate-[spin_1.5s_linear_infinite]"
			)}
			role="status"></div>
	);
}
