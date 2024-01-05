import { ICONS } from "@/constants/ICONS";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { ICategory, IProduct } from "@/types/CommonType";
import { useRouter } from "next/router";
import Rating from "@/components/shared/Rating";
import List from "@/components/shared/List";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { StoreContext, useAppContext } from "@/utils/Context";
import ToastContainer from "@/components/shared/Toast";
import { getThumbnailImage } from "@/constants/Functions";

const Product3 = ({
	product,
	category,
}: {
	product: IProduct;
	category: ICategory;
}) => {
	const router = useRouter();
	const { builder_items, setContextState } = useAppContext();

	//
	// Alert State
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [AlertType, setAlertType] = useState<
		"success" | "error" | "warning"
	>("success");
	const [AlertMessages, setAlertMessages] = useState("");

	//
	const add_to_builder_handler = () => {
		setContextState({
			builder_items: {
				...builder_items,
				[category.key]: product,
			},
		});
		setIsAlertOpen(true);
		setAlertType("success");
		setAlertMessages(
			"Product added successfully in your list.  You are redirecting to pc-builder page"
		);
		router.push(`/pc-builder`);
	};

	return (
		<div className=" w-full flex flex-col gap-4">
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
				<PrimaryButton
					title="Add to builder"
					onClick={() => add_to_builder_handler()}
				/>
				<Rating
					current_value={Number(product.avg_rating)}
					className=" justify-start"
				/>

				{/* Toast */}
				{isAlertOpen && (
					<ToastContainer
						type={AlertType}
						messages={AlertMessages}
						isAlertOpen={isAlertOpen}
						setIsAlertOpen={setIsAlertOpen}
						className=" max-w-xs w-full fixed z-50   top-24   right-0 flex justify-center"
					/>
				)}
			</div>
		</div>
	);
};

export default Product3;

