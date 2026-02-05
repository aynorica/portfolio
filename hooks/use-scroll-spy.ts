"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + offset;

			for (const id of sectionIds) {
				const element = document.getElementById(id);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveId(id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call once on mount

		return () => window.removeEventListener("scroll", handleScroll);
	}, [sectionIds, offset]);

	return activeId;
}
