/* eslint-disable @next/next/no-img-element */
import { getThumbnailImage } from "@/constants/Functions";
import { IMAGES } from "@/constants/IMAGES";
import Image from "next/image";
import React from "react";

const ShopGallery = () => {
	return (
		<div className=" w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 grid-rows-2  gap-7 ">
			<div className=" h-[240px]  relative">
				<Image
					alt=""
					fill
					src={getThumbnailImage(IMAGES.shop1)}
				/>
			</div>
			<div className=" row-span-2 w-full h-full     relative">
				<Image
					alt=""
					fill
					src={IMAGES.shop2}
				/>
			</div>
			<div className=" w-full h-full     relative">
				<Image
					alt=""
					fill
					src={IMAGES.shop3}
				/>
			</div>

			<div className="  w-full h-full     relative">
				<Image
					alt=""
					fill
					src={IMAGES.shop4}
				/>
			</div>
			<div className=" w-full h-full     relative">
				<Image
					alt=""
					fill
					src={IMAGES.shop5}
				/>
			</div>
		</div>
	);
};

export default ShopGallery;

