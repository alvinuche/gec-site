import React from "react";
import { motion } from "framer-motion";
import circle from "../assets/images/intro_images/circle.svg";
import Rectangle from "../assets/images/intro_images/Rectangle.svg";
import Polygon1 from "../assets/images/intro_images/Polygon1.svg";
import Polygon2 from "../assets/images/intro_images/Polygon2.svg";

const SiteIntro = () => {
	return (
		<div className="site-intro">
			<div className="site-intro-container">
				<svg
					// width="205"
					// height="55"
					viewBox="0 0 205 55"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						initial={{
							opacity: 0,
							pathLength: 0,
							fillOpacity: 0,
							// fill: "none",
						}}
						animate={{
							opacity: 1,
							pathLength: 1,
							fillOpacity: 1,
							// fill: "#fff",
						}}
						transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
						d="M111.83 26.9378V45.1448C109.487 46.8254 106.984 48.06 104.322 48.8484C101.681 49.6162 98.848 50 95.8236 50C92.0537 50 88.6353 49.4294 85.5683 48.2882C82.5226 47.147 79.9135 45.5598 77.741 43.5264C75.5899 41.493 73.9286 39.0654 72.7571 36.2436C71.5857 33.4217 71 30.3405 71 27C71 23.618 71.5644 20.516 72.6932 17.6942C73.8221 14.8723 75.4195 12.4447 77.4854 10.4114C79.5727 8.37799 82.0966 6.80108 85.0571 5.68065C88.0176 4.56022 91.3402 4 95.0249 4C96.8992 4 98.6457 4.14524 100.264 4.43572C101.904 4.72621 103.417 5.13081 104.801 5.64953C106.207 6.14749 107.485 6.75958 108.635 7.48579C109.785 8.212 110.839 9.01082 111.798 9.88227L109.338 13.6793C108.954 14.281 108.454 14.6545 107.836 14.7997C107.218 14.9242 106.548 14.7686 105.823 14.3329C105.12 13.9387 104.418 13.5444 103.715 13.1502C103.012 12.756 102.224 12.4136 101.351 12.1231C100.499 11.8327 99.5296 11.594 98.4434 11.4073C97.3784 11.2206 96.1431 11.1272 94.7374 11.1272C92.4584 11.1272 90.3925 11.5007 88.5395 12.2476C86.7078 12.9946 85.1423 14.0631 83.8431 15.4533C82.5439 16.8435 81.5428 18.5138 80.84 20.4641C80.1371 22.4145 79.7857 24.5931 79.7857 27C79.7857 29.5728 80.1584 31.876 80.9039 33.9093C81.6706 35.922 82.7356 37.6337 84.0987 39.0447C85.4831 40.4348 87.1444 41.5034 89.0826 42.2503C91.0208 42.9765 93.1826 43.3396 95.568 43.3396C97.2719 43.3396 98.7948 43.1633 100.137 42.8106C101.478 42.4578 102.788 41.9806 104.066 41.3789V33.2246H98.2517C97.6979 33.2246 97.2613 33.0794 96.9418 32.7889C96.6436 32.4777 96.4945 32.1042 96.4945 31.6685V26.9378H111.83Z"
					/>
					<motion.path
						initial={{
							opacity: 0,
							pathLength: 0,
							fillOpacity: 0,
							// fill: "none",
						}}
						animate={{
							opacity: 1,
							pathLength: 1,
							fillOpacity: 1,
							// fill: "#fff",
						}}
						transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
						d="M135.125 11.1583V23.6387H151.291V30.0812H135.125V42.8106H155.636V49.502H126.499V4.49797H155.636V11.1583H135.125Z"
						fill="none"
					/>
					<motion.path
						initial={{
							opacity: 0,
							pathLength: 0,
							fillOpacity: 0,
							// fill: "none",
						}}
						animate={{
							opacity: 1,
							pathLength: 1,
							fillOpacity: 1,
							// fill: "#fff",
						}}
						transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
						d="M200.368 38.889C200.836 38.889 201.251 39.0654 201.614 39.4181L205 42.9973C203.126 45.2589 200.815 46.9914 198.067 48.1949C195.341 49.3983 192.061 50 188.227 50C184.798 50 181.71 49.4294 178.962 48.2882C176.236 47.147 173.904 45.5598 171.966 43.5264C170.028 41.493 168.537 39.0654 167.493 36.2436C166.471 33.4217 165.96 30.3405 165.96 27C165.96 23.618 166.513 20.5264 167.621 17.7253C168.728 14.9035 170.283 12.4759 172.285 10.4425C174.309 8.40911 176.715 6.8322 179.505 5.71177C182.296 4.57059 185.384 4 188.77 4C192.136 4 195.117 4.53947 197.716 5.6184C200.336 6.69734 202.561 8.10825 204.393 9.85115L201.518 13.7415C201.347 13.9905 201.124 14.2084 200.847 14.3951C200.591 14.5819 200.229 14.6752 199.761 14.6752C199.441 14.6752 199.111 14.5922 198.77 14.4262C198.429 14.2395 198.057 14.0217 197.652 13.7727C197.247 13.5029 196.779 13.2124 196.246 12.9012C195.714 12.59 195.096 12.3099 194.393 12.0609C193.69 11.7912 192.87 11.5733 191.933 11.4073C191.017 11.2206 189.952 11.1272 188.738 11.1272C186.672 11.1272 184.777 11.4903 183.052 12.2165C181.348 12.922 179.878 13.9594 178.643 15.3288C177.408 16.6775 176.449 18.3374 175.768 20.3085C175.086 22.2589 174.745 24.4894 174.745 27C174.745 29.5313 175.107 31.7826 175.831 33.7537C176.577 35.7249 177.578 37.3848 178.835 38.7334C180.091 40.0821 181.571 41.1195 183.275 41.8457C184.979 42.5512 186.811 42.9039 188.77 42.9039C189.942 42.9039 190.996 42.8417 191.933 42.7172C192.892 42.5927 193.765 42.3956 194.553 42.1258C195.362 41.8561 196.118 41.5138 196.821 41.0988C197.545 40.6631 198.259 40.134 198.962 39.5115C199.175 39.3248 199.398 39.1795 199.633 39.0758C199.867 38.9513 200.112 38.889 200.368 38.889Z"
						fill="none"
					/>
					<motion.rect
						x="18.2434"
						y="0.59729"
						width="11.8533"
						height="53.34"
						transform="rotate(20 18.2434 0.59729)"
						fill="url(#paint0_linear)"
						initial={{ opacity: 0, rotate: 360 }}
						animate={{ opacity: 1, rotate: 20 }}
						transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
					/>
					<motion.rect
						x="48.8615"
						width="11.8533"
						height="53.34"
						transform="rotate(20 48.8615 0)"
						fill="url(#paint1_linear)"
						initial={{ opacity: 0, rotate: 360 }}
						animate={{ opacity: 1, rotate: 20 }}
						transition={{ delay: 1, type: "spring", stiffness: 120 }}
					/>
					<motion.rect
						x="34.0449"
						width="11.8533"
						height="53.34"
						transform="rotate(20 34.0449 0)"
						fill="url(#paint2_linear)"
						initial={{ opacity: 0, rotate: 360 }}
						animate={{ opacity: 1, rotate: 20 }}
						transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="24.17"
							y1="0.59729"
							x2="24.17"
							y2="53.9373"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#6AF2D8" />
							<stop offset="1" stopColor="#1E77A5" stopOpacity="0.5" />
						</linearGradient>
						<linearGradient
							id="paint1_linear"
							x1="54.7882"
							y1="0"
							x2="54.7882"
							y2="53.34"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#6AF2D8" stopOpacity="0.25" />
							<stop offset="1" stopColor="#1E77A5" stopOpacity="0.1" />
						</linearGradient>
						<linearGradient
							id="paint2_linear"
							x1="39.9715"
							y1="0"
							x2="39.9715"
							y2="53.34"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#6AF2D8" stopOpacity="0.5" />
							<stop offset="1" stopColor="#1E77A5" stopOpacity="0.25" />
						</linearGradient>
					</defs>
				</svg>
				<div className="intro-shapes">
					<div className="shape-container">
						<motion.img
							initial={{ opacity: 0, x: 0, y: 0 }}
							animate={{ opacity: 1, x: "-50vw", y: "80vh" }}
							transition={{
								duration: 3,
								ease: "easeInOut",
								delay: 0.5,
								repeatType: "reverse",
								repeat: Infinity,
							}}
							className="circle"
							src={circle}
							alt="cricle"
						/>
						<motion.img
							initial={{ opacity: 0, x: 0, y: 0 }}
							animate={{ opacity: 1, x: "-50vw", y: "-80vh" }}
							transition={{
								duration: 3,
								ease: "easeInOut",
								delay: 0.5,
								repeatType: "reverse",
								repeat: Infinity,
							}}
							className="rectangle"
							src={Rectangle}
							alt="rectangle"
						/>
						<motion.img
							initial={{ opacity: 1, rotate: 0, scale: 0, x: 0, y: 0 }}
							animate={{
								opacity: 0,
								rotate: 360,
								scale: 3,
								x: "50vw",
								y: "-50vh",
							}}
							transition={{
								duration: 3,
								ease: "easeInOut",
								delay: 0.5,
								repeatType: "reverse",
								repeat: Infinity,
							}}
							className="polygon1"
							src={Polygon1}
							alt="polygon"
						/>
						<motion.img
							initial={{ opacity: 0, rotateX: 0, y: 0 }}
							animate={{ opacity: 1, rotateX: 360, y: "50vh" }}
							transition={{
								duration: 3,
								ease: "easeInOut",
								delay: 0.5,
								repeatType: "reverse",
								repeat: Infinity,
							}}
							className="polygon2"
							src={Polygon2}
							alt="polygon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SiteIntro;
