import Category from "@/components/core/category/Category";
import { ICategory } from "@/types/CommonType";

const Categories = ({ categories }: { categories: Partial<ICategory>[] }) => {
	return (
		<div className="flex items-center justify-center gap-6  md:gap-10 flex-wrap">
			{categories?.map((category) => {
				return (
					<Category
						key={category?._id}
						category_key={category?.key}
						card_styles="bg-primary bg-opacity-50"
						title={category?.name as string}
						text_styles="text-white"
						image_url={`${category?.image}`}
					/>
				);
			})}
		</div>
	);
};

export default Categories;

