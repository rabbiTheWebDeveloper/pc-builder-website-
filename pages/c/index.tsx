import AllCategories from "@/components/presentation/categories/AllCategories";
import { ICategory } from "@/types/CommonType";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type ICategories = {
	categories: ICategory[];
};

const Categories = ({
	categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className="max-w-project mx-auto px-4 py-20">
			<AllCategories categories={categories} />
		</div>
	);
};

export default Categories;

//
export const getStaticProps: GetStaticProps<ICategories> = async () => {
	const base_url = process.env.BASE_URL;

	// categories
	const categories_res = await fetch(`${base_url}/api/categories`);
	const categories = await categories_res.json();

	return { props: { categories } };
};

