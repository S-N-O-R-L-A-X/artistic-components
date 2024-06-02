import { useRef, useEffect } from "react";

export const useInterval = (fn: () => void, delay: number, immediate: boolean = true) => {
	const fnRef = useRef<() => void>();
	fnRef.current = fn;

	useEffect(() => {
		if (delay < 0) return;
		if (immediate) {
			fnRef.current!();
		}
		const timer = setInterval(() => {
			fnRef.current!();
		}, delay);
		return () => {
			clearInterval(timer);
		};
	}, [delay])
}