"use client";

import { useEffect, useState } from "react";

export function useInView(ref: React.RefObject<HTMLElement>) {
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
				}
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -100px 0px",
			},
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);

	return isInView;
}
