import ProductDetailsMainPart from "@/components/presentation/ProductDetails/ProductDetailsMainPart";
import TabCard from "@/components/shared/TabCard";
import { IProduct, IReview } from "@/types/CommonType";
import React, { useEffect, useState } from "react";
import type {
	InferGetStaticPropsType,
	GetStaticProps,
	GetStaticPaths,
} from "next";
import Reviews from "./Reviews";
import WriteReviewForm from "@/components/core/ProductDetails/WriteReviewForm";
import { useSession } from "next-auth/react";

type ProductDetails = {
	product_details: IProduct;
	product_reviews: IReview[];
};

const ProductDetails = ({
	product_details,
	product_reviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="px-4  py-10 md:py-20">
			<div className="max-w-project w-full   mx-auto ">
				{product_details && (
					<ProductDetailsMainPart
						product_details={product_details}
					/>
				)}
				<TabCard
					buttons={[
						{ title: "Description" },
						{ title: "Reviews" },
					]}
					descriptions={[
						{
							desc: product_details?.description,
						},
						{
							description_component: (
								<Reviews
									reviews={
										product_reviews
									}
								/>
							),
						},
					]}
				/>
			</div>
		</div>
	);
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
	const base_url = process.env.BASE_URL;
	// all products
	const all_products_resp = await fetch(`${base_url}/api/products`);
	const all_products = await all_products_resp.json();

	return {
		paths: all_products?.map((product: IProduct) => ({
			params: {
				id: product._id,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ProductDetails> = async ({
	params,
}) => {
	const base_url = process.env.BASE_URL;
	//   product details
	const product_details_res = await fetch(
		`${base_url}/api/products/${params?.id}`
	);
	const product_details = await product_details_res.json();
	// all products
	const product_reviews_res = await fetch(
		`${base_url}/api/reviews/${params?.id}`
	);

	const product_reviews = await product_reviews_res.json();

	return { props: { product_details, product_reviews }, revalidate: 60 };
};

