import { ICONS } from "@/constants/ICONS";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { IProduct } from "@/types/CommonType";
import { useRouter } from "next/router";
import Rating from "@/components/shared/Rating";
import List from "@/components/shared/List";
import { getThumbnailImage } from "@/constants/Functions";
import Link from "next/link";

const Product = ({ product }: { product: IProduct }) => {
	const router = useRouter();
	return (
		<Link
			href={`/products/${product._id}`}
			className=" w-[280px] md:w-[370px] flex flex-col gap-4"
		>
			{/* Image */}
			<div className=" relative w-full h-[300px] ">
				{product?.image && (
					<Image
						alt=""
						className=" object-contain bg-white"
						src={getThumbnailImage(
							product?.image
						)}
						fill
					/>
				)}
			</div>

			{/* Desc */}
			<div className="text-2x text-[#fff] font-libre font-medium flex items-start gap-4  ">
				<p className=" flex-grow">{product?.name}</p>
				<p className="flex-none">${product.price}</p>
			</div>

			<div>
				<p className=" text-base font-jakarta text-white/80  ">
					{product?.short_desc}
				</p>
			</div>

			<div className="text-2x text-[#fff] font-libre font-medium flex items-start gap-2  ">
				<List
					listParentStyles="flex-row  flex-wrap gap-4"
					titleStyles=" text-sm"
					valueStyles=" text-sm"
					items={[
						{
							title: "Category:",
							value: `${product.category} , `,
						},
						{
							title: "Status:",
							value: product.status,
						},
					]}
				/>
			</div>

			<div className="flex items-center justify-between ">
				<SecondaryButton
					title="See details"
					onClick={() =>
						router.push(
							`/products/${product._id}`
						)
					}
				/>
				<Rating
					current_value={Number(product.avg_rating)}
					className=" justify-start"
				/>
			</div>
		</Link>
	);
};

export default Product;

