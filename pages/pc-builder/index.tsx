import PCBuilderTable from "@/components/presentation/PCBuilder/PCBuilderTable";
import { ICategory, IProduct } from "@/types/CommonType";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

type IPCBuilder = {
	categories: ICategory[];
};
const PCBuilder = ({
	categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="w-ful px-4 py-20 ">
			<PCBuilderTable
				categories={categories}
				// selected_products={selected_products}
			/>
		</div>
	);
};

export default PCBuilder;

//
export const getStaticProps: GetStaticProps<IPCBuilder> = async () => {
	const base_url = process.env.BASE_URL;
	// featured products
	const featured_products_res = await fetch(
		`${base_url}/api/products/featured`
	);
	const featured_products = await featured_products_res.json();

	// categories
	const categories_res = await fetch(`${base_url}/api/categories`);
	const categories = await categories_res.json();

	return { props: { featured_products, categories } };
};

