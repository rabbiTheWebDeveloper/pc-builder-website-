import ProductsList from "@/components/presentation/productsList/ProductsList";
import { ICategory, IProduct } from "@/types/CommonType";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type IProductsPage = {
	categories: ICategory[];
	all_products: IProduct[];
};

type IGroupedListing = {
	[category: string]: Array<IProduct>;
};
type IGroupedListingResult = {
	category: ICategory;
	listings: Array<IProduct>;
};

const Products = ({
	categories,
	all_products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	// Create a dictionary to group listings by categories

	const groupedListings: IGroupedListing = {};
	categories.forEach((category) => {
		groupedListings[category?.key] = [];
	});

	// Sort the listings into the appropriate category sub-arrays
	all_products.forEach((listing) => {
		const category = listing.category;
		if (groupedListings.hasOwnProperty(category)) {
			groupedListings[category].push(listing);
		}
	});

	// Convert the groupedListings object to an array of objects
	const grouped_listings_res = Object.keys(groupedListings).map(
		(category) => {
			return {
				category: categories?.filter(
					(ct) => ct.key === category
				)[0],
				listings: groupedListings[category],
			};
		}
	);

	return (
		<div className="px-4 py-14 md:py-20">
			<div className="mx-auto  max-w-project ">
				<ProductsList
					grouped_listings_res={
						grouped_listings_res as unknown as IGroupedListingResult[]
					}
				/>
			</div>
		</div>
	);
};

export default Products;

//
export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const base_url = process.env.BASE_URL;
	// featured products
	const products_res = await fetch(`${base_url}/api/products`);
	const all_products = await products_res.json();

	// categories
	const categories_res = await fetch(`${base_url}/api/categories`);
	const categories = await categories_res.json();

	return { props: { all_products, categories } };
};

