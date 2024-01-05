import Product3 from "@/components/core/Product/Product3";
import Title from "@/components/shared/Title";
import { VECTORS } from "@/constants/Vectors";
import { ICategory, IProduct } from "@/types/CommonType";
import { useRouter } from "next/router";
import React from "react";

type IChooseProductsList = {
	category: ICategory;
	listings: Array<IProduct>;
};
const ChooseProductsList = ({ category, listings }: IChooseProductsList) => {
	const router = useRouter();

	return (
		<div className="flex flex-col gap-20 md:gap-28">
			{/* Group */}
			<div>
				{/* Category Title */}
				<div className=" sticky top-[79px] bg-[#111114] w-auto h-20 z-10 shadow-md flex flex-col items-center justify-center gap-1 mb-14">
					<Title
						title={category.name}
						className=" text-2xl md:text-4xl"
					/>
					{VECTORS.line_separator}
				</div>

				{/* Listings */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
					{listings?.map((product) => {
						return (
							<Product3
								key={product?._id}
								product={product}
								category={category}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ChooseProductsList;

