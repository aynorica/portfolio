"use client";

import { useEffect, useState } from "react";

export function useCountUp(end: number, duration: number = 2000) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);

	const start = () => setHasStarted(true);

	useEffect(() => {
		if (!hasStarted) return;

		const startTime = Date.now();
		const endTime = startTime + duration;

		const updateCount = () => {
			const now = Date.now();
			const progress = Math.min((now - startTime) / duration, 1);
			const easeOutQuad = 1 - Math.pow(1 - progress, 2);

			setCount(Math.floor(end * easeOutQuad));

			if (now < endTime) {
				requestAnimationFrame(updateCount);
			} else {
				setCount(end);
			}
		};

		requestAnimationFrame(updateCount);
	}, [end, duration, hasStarted]);

	return { count, start };
}
