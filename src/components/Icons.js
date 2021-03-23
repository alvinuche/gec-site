import React from "react";
import { Link } from "react-router-dom";

export const Phone = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
		>
			<path
				d="M17.49 13.8067C17.4483 13.5487 17.2865 13.3283 17.0443 13.1973L13.4605 11.0858L13.431 11.0693C13.2808 10.994 13.1148 10.9555 12.9468 10.9568C12.6465 10.9568 12.3598 11.0705 12.1608 11.27L11.103 12.3282C11.0578 12.3712 10.9103 12.4335 10.8655 12.4357C10.8533 12.4347 9.63479 12.347 7.39154 10.1035C5.15229 7.86475 5.05729 6.6425 5.05654 6.6425C5.05779 6.58 5.11929 6.433 5.16304 6.3875L6.06504 5.48575C6.38279 5.16725 6.47804 4.63925 6.28954 4.23025L4.29754 0.482C4.15279 0.184 3.87154 0 3.55954 0C3.33879 0 3.12579 0.0915 2.95929 0.25775L0.500542 2.711C0.264792 2.9455 0.0617916 3.3555 0.0175416 3.6855C-0.0039584 3.84325 -0.440208 7.60875 4.72229 12.772C9.10504 17.1542 12.5225 17.4947 13.4663 17.4947C13.5812 17.4962 13.6961 17.4903 13.8103 17.477C14.1393 17.433 14.5488 17.2305 14.783 16.9957L17.2398 14.5392C17.4403 14.3377 17.5318 14.0715 17.49 13.8067V13.8067Z"
				fill="#DEDEDE"
			/>
		</svg>
	);
};

export const Email = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="13"
			viewBox="0 0 16 13"
			fill="none"
		>
			<path
				d="M16 3.373V10.5C16 11.163 15.7366 11.7989 15.2678 12.2678C14.7989 12.7366 14.163 13 13.5 13H2.5C1.83696 13 1.20107 12.7366 0.732233 12.2678C0.263392 11.7989 0 11.163 0 10.5V3.373L7.746 7.931C7.82295 7.97638 7.91066 8.00032 8 8.00032C8.08934 8.00032 8.17705 7.97638 8.254 7.931L16 3.373ZM13.5 3.09527e-08C14.1151 -9.6716e-05 14.7087 0.226607 15.1672 0.63674C15.6257 1.04687 15.9168 1.61164 15.985 2.223L8 6.92L0.0150001 2.223C0.0831583 1.61164 0.374324 1.04687 0.832795 0.63674C1.29127 0.226607 1.88485 -9.6716e-05 2.5 3.09527e-08H13.5Z"
				fill="#DEDEDE"
			/>
		</svg>
	);
};

export const SocialIcons = () => {
	return (
		<div>
			<ul className="social-links-wrapper">
				<li>
					<Link to="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="9"
							height="16"
							viewBox="0 0 9 16"
							fill="none"
						>
							<path
								d="M1.97746 16H5.27873V9.25474H8.25317L8.58 5.90316H5.27873V4.21053C5.27873 3.98719 5.36568 3.77299 5.52046 3.61507C5.67524 3.45714 5.88516 3.36842 6.10405 3.36842H8.58V0H6.10405C5.00961 0 3.96 0.443608 3.18611 1.23323C2.41222 2.02286 1.97746 3.09383 1.97746 4.21053V5.90316H0.326826L0 9.25474H1.97746V16Z"
								fill="white"
							/>
						</svg>
					</Link>
				</li>
				<li>
					<Link to="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="12"
							viewBox="0 0 16 12"
							fill="none"
						>
							<path
								d="M14.3554 2.99061C14.3655 3.12186 14.3655 3.25313 14.3655 3.38437C14.3655 7.38748 11.066 12 5.03555 12C3.17767 12 1.45179 11.5031 0 10.6406C0.26397 10.6687 0.517752 10.6781 0.791878 10.6781C2.32485 10.6781 3.73605 10.2 4.86296 9.38439C3.42133 9.35625 2.2132 8.48438 1.79694 7.28437C2.00001 7.31248 2.20304 7.33124 2.41626 7.33124C2.71067 7.33124 3.00511 7.29372 3.2792 7.22813C1.77666 6.94686 0.649721 5.72812 0.649721 4.25624V4.21876C1.08625 4.44376 1.59391 4.58438 2.13195 4.60311C1.24869 4.05935 0.670034 3.13124 0.670034 2.08123C0.670034 1.51874 0.832441 1.00311 1.11672 0.553111C2.73095 2.39061 5.15736 3.59059 7.87816 3.72186C7.82741 3.49686 7.79694 3.26251 7.79694 3.02813C7.79694 1.35936 9.25888 0 11.0761 0C12.0203 0 12.8731 0.365624 13.4721 0.95625C14.2132 0.825006 14.9238 0.571868 15.5533 0.225002C15.3096 0.928142 14.7919 1.51877 14.1117 1.89374C14.7716 1.82815 15.4112 1.65936 16 1.42501C15.5534 2.02499 14.995 2.55934 14.3554 2.99061V2.99061Z"
								fill="white"
							/>
						</svg>
					</Link>
				</li>
				<li>
					<Link to="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
						>
							<path
								d="M7.50167 3.65419C5.3734 3.65419 3.65672 5.37125 3.65672 7.5C3.65672 9.62875 5.3734 11.3458 7.50167 11.3458C9.62995 11.3458 11.3466 9.62875 11.3466 7.5C11.3466 5.37125 9.62995 3.65419 7.50167 3.65419ZM7.50167 10.0003C6.12632 10.0003 5.00195 8.879 5.00195 7.5C5.00195 6.121 6.12298 4.99972 7.50167 4.99972C8.88037 4.99972 10.0014 6.121 10.0014 7.5C10.0014 8.879 8.87702 10.0003 7.50167 10.0003ZM12.4007 3.49688C12.4007 3.99559 11.9992 4.3939 11.5039 4.3939C11.0053 4.3939 10.6071 3.99225 10.6071 3.49688C10.6071 3.00151 11.0086 2.59985 11.5039 2.59985C11.9992 2.59985 12.4007 3.00151 12.4007 3.49688ZM14.9473 4.40729C14.8904 3.20568 14.616 2.1413 13.7359 1.26436C12.8592 0.387426 11.795 0.112964 10.5937 0.0527167C9.35555 -0.0175722 5.64445 -0.0175722 4.4063 0.0527167C3.20831 0.109617 2.14417 0.384079 1.26408 1.26102C0.383993 2.13796 0.112939 3.20233 0.052705 4.40394C-0.0175683 5.64236 -0.0175683 9.35429 0.052705 10.5927C0.109593 11.7943 0.383993 12.8587 1.26408 13.7356C2.14417 14.6126 3.20496 14.887 4.4063 14.9473C5.64445 15.0176 9.35555 15.0176 10.5937 14.9473C11.795 14.8904 12.8592 14.6159 13.7359 13.7356C14.6127 12.8587 14.8871 11.7943 14.9473 10.5927C15.0176 9.35429 15.0176 5.64571 14.9473 4.40729ZM13.3477 11.9215C13.0867 12.5775 12.5814 13.083 11.9222 13.3474C10.935 13.739 8.59258 13.6486 7.50167 13.6486C6.41076 13.6486 4.06497 13.7356 3.08115 13.3474C2.42526 13.0863 1.91997 12.5809 1.65561 11.9215C1.26408 10.9341 1.35443 8.59115 1.35443 7.5C1.35443 6.40885 1.26743 4.06253 1.65561 3.07849C1.91662 2.42246 2.42192 1.91705 3.08115 1.65263C4.06832 1.26102 6.41076 1.35139 7.50167 1.35139C8.59258 1.35139 10.9384 1.26436 11.9222 1.65263C12.5781 1.9137 13.0834 2.41911 13.3477 3.07849C13.7393 4.06588 13.6489 6.40885 13.6489 7.5C13.6489 8.59115 13.7393 10.9375 13.3477 11.9215Z"
								fill="white"
							/>
						</svg>
					</Link>
				</li>
				<li>
					<Link to="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<path
								d="M0.500012 16H3.50001V4.9H0.500012V16ZM2.00001 0C1.00001 0 0.200012 0.8 0.200012 1.8C0.200012 2.8 1.00001 3.6 2.00001 3.6C3.00001 3.6 3.80001 2.8 3.80001 1.8C3.80001 0.8 3.00001 0 2.00001 0ZM8.60001 6.6V4.9H5.60001V16H8.60001V10.3C8.60001 7.1 12.7 6.9 12.7 10.3V16H15.7V9.2C15.7 3.8 10 4 8.60001 6.6Z"
								fill="white"
							/>
						</svg>
					</Link>
				</li>
			</ul>
		</div>
	);
};