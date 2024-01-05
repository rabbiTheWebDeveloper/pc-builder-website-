import CategoryProducts from "@/components/presentation/productsList/CategoryProducts";
import ChooseProductsList from "@/components/presentation/productsList/ChooseProductsList";
import { ICategory, IProduct } from "@/types/CommonType";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type IProductsByCategory = {
	category_details: ICategory;
	selected_categories_products: IProduct[];
};
const ProductsByCategory = ({
	category_details,
	selected_categories_products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="px-4 py-14 md:py-20">
			<div className="mx-auto  max-w-project ">
				<CategoryProducts
					category={category_details}
					listings={selected_categories_products}
				/>
			</div>
		</div>
	);
};

export default ProductsByCategory;

export const getStaticPaths: GetStaticPaths = async () => {
	const base_url = process.env.BASE_URL;
	// all products
	const all_categories_resp = await fetch(`${base_url}/api/categories`);
	const all_categories = await all_categories_resp.json();

	return {
		paths: all_categories?.map((category: ICategory) => ({
			params: {
				key: category.key,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<IProductsByCategory> = async ({
	params,
}) => {
	const base_url = process.env.BASE_URL;
	// featured products_res
	const products_res = await fetch(
		`${base_url}/api/categories/products?category=${params?.key}`
	);
	const selected_categories_products = await products_res.json();

	// categories
	const category_details_res = await fetch(
		`${base_url}/api/categories/${params?.key}`
	);
	const category_details = await category_details_res.json();

	return { props: { selected_categories_products, category_details } };
};

