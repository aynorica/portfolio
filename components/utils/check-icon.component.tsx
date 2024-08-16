import { IconInterface } from "@/Models/Interfaces/icon.interface";

export default function CheckIcon({ height, width }: IconInterface) {
	return (
		<svg
			width={width || 16}
			height={height || 16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_13_298)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7803 6.28033C12.0732 5.98744 12.0732 5.51256 11.7803 5.21967C11.4874 4.92678 11.0126 4.92678 10.7197 5.21967L6.75 9.18934L5.28033 7.71967C4.98744 7.42678 4.51256 7.42678 4.21967 7.71967C3.92678 8.01256 3.92678 8.48744 4.21967 8.78033L6.21967 10.7803C6.51256 11.0732 6.98744 11.0732 7.28033 10.7803L11.7803 6.28033Z"
					fill="#10b981"
				/>
			</g>
			<defs>
				<clipPath id="clip0_13_298">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}