import Image from "next/image";
import HeroBanner from "@/components/presentation/HeroBanners/HeroBanner";
import ProductsCarousel from "@/components/presentation/products/ProductsCarousel";
import Title from "@/components/shared/Title";
import Description from "@/components/shared/Description";
import { VECTORS } from "@/constants/Vectors";
import Categories from "@/components/presentation/Categories/Categories";
import ShopGallery from "@/components/presentation/Gallery/ShopGallery";
import KeyFeatures from "@/components/presentation/KeyFeatures/KeyFeatures";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { ICategory, IProduct } from "@/types/CommonType";
import { FeaturedCategoriesData } from "@/data/CategoriesList";

type IHome = {
	categories: ICategory[];
	featured_products: IProduct[];
};

//
export default function Home({
	categories,
	featured_products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className=" flex flex-col  gap-20 md:gap-28  py-10  ">
			<div className="max-w-project mx-auto px-4">
				<HeroBanner product={featured_products[6]} />
			</div>

			{/* Featured listings */}
			<div className="max-w-project w-full   mx-auto px-4">
				<div className="max-w-xl mx-auto flex flex-col gap-4 mb-10 md:mb-14">
					<span className="absolute left-0 hidden sm:block">
						{VECTORS.star}
					</span>
					<Title title="Most popular items" />
					<Description
						description="Empower Your PC: Unleash Innovation with Featured Gems! Powerful processors, top-tier graphics cards, lightning-fast SSDs, seamless multitasking—handpicked, tested for performance. Build your legacy now!"
						className="text-center"
					/>
				</div>
				<ProductsCarousel products={featured_products} />
			</div>

			{/*  */}
			<div className="">
				<KeyFeatures />
			</div>

			{/* Featured listings */}
			<div className="max-w-project mx-auto px-4">
				<div className="max-w-xl mx-auto flex flex-col gap-4  mb-10 md:mb-14">
					<Title title="Categories" />
					<Description
						description="Empower Your PC with Featured Gems: Build Your Digital Legacy Today! Explore top-tier components, from powerful processors and cutting-edge graphics cards to lightning-fast SSDs and seamless multitasking memory modules."
						className="text-center"
					/>
				</div>

				<Categories categories={FeaturedCategoriesData} />
			</div>

			{/* Gallery */}
			<div className="max-w-project w-full mx-auto px-4">
				<div className="max-w-xl  mx-auto flex flex-col gap-4 mb-10  md:mb-14">
					<span className="absolute left-0 hidden sm:block">
						{VECTORS.start_shape}
					</span>
					<Title title="Visit Our Shops" />
					<Description
						description="Step into a tech paradise at our cutting-edge shops. Discover a world of innovation with top-tier components like powerful processors, state-of-the-art graphics cards, lightning-fast SSDs, and multitasking memory modules."
						className="text-center"
					/>
				</div>
				<ShopGallery />
			</div>
		</div>
	);
}

//
export const getStaticProps: GetStaticProps<IHome> = async () => {
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

