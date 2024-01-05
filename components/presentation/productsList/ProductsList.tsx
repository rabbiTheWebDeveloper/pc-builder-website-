import Product2 from "@/components/core/Product/Product2";
import Title from "@/components/shared/Title";
import { VECTORS } from "@/constants/Vectors";
import { ICategory, IProduct } from "@/types/CommonType";
import { useRouter } from "next/router";
import React from "react";

type IGroupedListings = {
	category: ICategory;
	listings: Array<IProduct>;
};
const ProductsList = ({
	grouped_listings_res,
}: {
	grouped_listings_res: IGroupedListings[];
}) => {
	const router = useRouter();

	const filterByCategory = router?.query?.category ?? undefined;

	return (
		<div className="flex flex-col gap-20 md:gap-28">
			{/* Group */}
			{grouped_listings_res?.map((group) => {
				let GroupUI = (
					<div key={group.category.key}>
						{/* Category Title */}
						<div className=" sticky top-[79px] z-10 bg-[#111114] w-auto h-20  shadow-md flex flex-col items-center justify-center gap-1 mb-14">
							<Title
								title={
									group.category
										.name
								}
								className=" text-2xl md:text-4xl"
							/>
							{VECTORS.line_separator}
						</div>

						{/* Listings */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
							{group?.listings?.map(
								(product) => {
									return (
										<Product2
											key={
												product?._id
											}
											product={
												product
											}
										/>
									);
								}
							)}
						</div>
					</div>
				);

				if (!filterByCategory) {
					return GroupUI;
				} else {
					if (
						group.category.key ===
						filterByCategory
					) {
						return GroupUI;
					}
				}
			})}
		</div>
	);
};

export default ProductsList;

