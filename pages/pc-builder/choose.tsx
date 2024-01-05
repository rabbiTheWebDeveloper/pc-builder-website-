import ChooseProductsList from "@/components/presentation/productsList/ChooseProductsList";
import ProductsList from "@/components/presentation/productsList/ProductsList";
import { ICategory, IProduct } from "@/types/CommonType";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type IChoose = {
	category_details: ICategory;
	selected_categories_products: IProduct[];
};

const Products = ({
	category_details,
	selected_categories_products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	// Create a dictionary to group listings by categories

	return (
		<div className="px-4 py-14 md:py-20">
			<div className="mx-auto  max-w-project ">
				<ChooseProductsList
					category={category_details}
					listings={selected_categories_products}
				/>
			</div>
		</div>
	);
};

export default Products;

//
export const getServerSideProps: GetServerSideProps<IChoose> = async (req) => {
	const base_url = process.env.BASE_URL;
	// featured products_res
	const products_res = await fetch(
		`${base_url}/api/categories/products?category=${req?.query?.category}`
	);
	const selected_categories_products = await products_res.json();

	// categories
	const category_details_res = await fetch(
		`${base_url}/api/categories/${req?.query?.category}`
	);
	const category_details = await category_details_res.json();

	return { props: { selected_categories_products, category_details } };
};

