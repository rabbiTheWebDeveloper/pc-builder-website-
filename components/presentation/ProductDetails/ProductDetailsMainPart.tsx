import Images from "@/components/core/ProductDetails/Images";
import Description from "@/components/shared/Description";
import List from "@/components/shared/List";
import Rating from "@/components/shared/Rating";
import Title from "@/components/shared/Title";
import { IProduct, IReview } from "@/types/CommonType";
import Image from "next/image";
import React from "react";

const ProductDetailsMainPart = ({
	product_details,
}: {
	product_details: IProduct;
}) => {
	let list_items = [
		{
			title: `Category :`,
			value: product_details?.category,
		},
		{
			title: `Status :`,
			value: product_details?.status,
		},
		...product_details?.key_features?.map((feature) => ({
			title: `${feature.split(":")[0]} : `,
			value: feature.split(":")[1],
		})),
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div className="w-full ">
				{product_details?.image && (
					<Images
						images={[`${product_details?.image}`]}
					/>
				)}
			</div>
			<div className="w-full md:w-[90%] flex flex-col gap-5">
				{/* Prduct Name */}
				<Title
					title={product_details?.name}
					className=" text-start text-3xl md:text-5xl"
				/>
				{/* Rating */}
				<Rating
					current_value={Number(
						product_details?.avg_rating
					)}
					className=" justify-start"
				/>

				{/* price */}
				<Title
					title={`$${product_details?.price}`}
					className=" text-start text-base"
				/>

				<Description
					description={product_details?.short_desc}
					className=" text-start text-base"
				/>

				{/* list */}
				{product_details && <List items={list_items} />}
			</div>
		</div>
	);
};

export default ProductDetailsMainPart;

