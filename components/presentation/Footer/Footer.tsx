import { IMAGES } from "@/constants/IMAGES";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
	return (
		<div className={["w-full  bg-[#5a5a5f]"].join(" ")}>
			<div className=" px-4 md:px-0 mb-auto max-w-project mt-20 min-h-[34px] py-10 mx-auto flex items-start   justify-start gap-8 flex-wrap  ">
				{/* 1st */}
				<div className=" flex-grow h-full flex flex-col  ">
					{/* logo Image */}
					<div className="    flex items-center justify-start gap-1">
						<Link
							href={"/"}
							className=" relative w-[100px]     h-[80px] md:h-[100px]"
						>
							<Image
								src={IMAGES.logo}
								alt="logo"
								fill
								className=" object-cover"
							/>
						</Link>
						<p className=" text-2xl md:text-2xl  font-libre  capitalize text-[#fff] ">
							PC BUILDER
						</p>
					</div>

					<div className="mt-auto">
						<p className=" text-base text-[#FFFFFF] font-jakarta">
							Craft Your Perfect PC: Unleash
							Your Computing Potential!
						</p>
					</div>
				</div>

				{/* 2nd */}
				{/* <div className="flex flex-col ">
				<h2 className=" text-xl font-medium  text-[#fff] font-jakarta">
					Usefull Link
				</h2>

				<div className=" flex flex-col gap-4 mt-4 ">
					<Link
						href={"/"}
						className=" text-base text-[#FFFFFF] font-jakarta"
					>
						About us
					</Link>
					<Link
						href={"/"}
						className=" text-base text-[#FFFFFF] font-jakarta"
					>
						About us
					</Link>
					<Link
						href={"/"}
						className=" text-base text-[#FFFFFF] font-jakarta"
					>
						About us
					</Link>
					<Link
						href={"/"}
						className=" text-base text-[#FFFFFF] font-jakarta"
					>
						About us
					</Link>
					<Link
						href={"/"}
						className=" text-base text-[#FFFFFF] font-jakarta"
					>
						About us
					</Link>
				</div>
			</div> */}
				{/* 3rd */}
				<div className=" flex-grow flex flex-col ">
					<h2 className=" text-xl font-medium  text-[#fff] font-jakarta">
						Contact US
					</h2>

					<div className=" flex flex-col gap-4 mt-4 ">
						<p className=" text-base text-[#FFFFFF] font-jakarta">
						7, Road No - 08/A, House no: 88, Dhaka 1229
						</p>
						<p className=" text-primary text-base font-jakarta">
							rabbithedeveloper@gamil.com
						</p>
						<p className=" text-white text-base font-jakarta">
							017265242..7.
						</p>
					</div>
				</div>

				{/* 4th */}
				<div className="  flex-grow flex flex-col ">
					<h2 className=" text-xl font-medium  text-[#fff] font-jakarta">
						Follow US
					</h2>

					<div className=" flex flex-col gap-4 mt-4 ">
						<Link
							href={
								"https://www.facebook.com/rafayelrabbi/"
							}
							className=" text-base text-[#FFFFFF] font-jakarta"
						>
							Facebook
						</Link>
						<Link
							href={
								"https://github.com/rabbiTheWebDeveloper"
							}
							className=" text-base text-[#FFFFFF] font-jakarta"
						>
							Github
						</Link>
						<Link
							href={
								"https://www.linkedin.com/in/alrabbi//"
							}
							className=" text-base text-[#FFFFFF] font-jakarta"
						>
							Lindien
						</Link>
					
					</div>
				</div>

				{/* 5th */}
				<div className="  flex-grow flex flex-col ">
					<h2 className=" text-xl font-medium  text-[#fff] font-jakarta">
						Legal
					</h2>

					<div className=" flex flex-col gap-4 mt-4 ">
						<p className=" text-base text-[#FFFFFF] font-jakarta">
							Website build by
							<a
								href="https://github.com/rabbiTheWebDeveloper"
								target="_blank"
							>
								{" "}
								rabbithedeveloper
							</a>
						</p>

						<p className=" text-white text-base font-jakarta">
							©2023. All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

