import ButtonByIcon from "@/components/shared/ButtonByIcon";
import Description from "@/components/shared/Description";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Title from "@/components/shared/Title";
import { ICONS } from "@/constants/ICONS";
import { ICategory, IProduct } from "@/types/CommonType";
import { useAppContext } from "@/utils/Context";
import Image from "next/image";
import { useRouter } from "next/router";

const BuilderItem = ({ category }: { category: ICategory }) => {
	const router = useRouter();
	const { builder_items, setContextState } = useAppContext();
	const product = builder_items?.[category.key]
		? builder_items?.[category.key]
		: undefined;

	const remove_item = () => {
		const temp = builder_items;
		delete temp?.[category.key];
		setContextState({
			builder_items: {
				...temp,
			},
		});
	};

	return (
		<li
			key={category._id}
			className=" grid grid-cols-12 py-4  border-b border-b-white/80 border-opacity-20"
		>
			{/* Category */}
			<div className="col-span-3  flex flex-col gap-2 items-center justify-center">
				<span className="text-primary">
					{category?.image && (
						<Image
							alt="icon"
							height={40}
							width={40}
							className="text-primary fill-primary"
							src={`${category?.image}`}
						/>
					)}
				</span>
				<span className="text-sm font-jakarta text-white ">
					{category?.name}
				</span>
			</div>
			{/* Product */}
			<div className="col-span-5 ">
				{product ? (
					<div className="flex items-start gap-3 ">
						<div className="w-20 h-20 relative flex-none  rounded-md overflow-hidden">
							<Image
								alt={product?.name}
								src={`${product?.image}`}
								fill
								className="bg-white object-contain "
							/>
						</div>
						<div className="flex-grow flex flex-col gap-2">
							<Title
								title={product?.name}
								className="text-start text-sm"
							/>
							<Description
								description={
									product?.short_desc
								}
								className="text-sm pr-4"
							/>
						</div>
					</div>
				) : (
					<p className=" h-full flex items-center justify-start text-white text-base font-jakarta ">
						N/A
					</p>
				)}
			</div>

			{/* Price */}
			<div className="col-span-1 flex items-center justify-center">
				{product ? (
					<Title
						title={`$ ${product?.price}`}
						className="text-start text-sm"
					/>
				) : (
					<p className="   text-white text-base font-jakarta ">
						N/A
					</p>
				)}
			</div>
			{/* Buttons */}
			<div className="col-span-3 flex items-center justify-center">
				{product ? (
					<div className="flex items-center justify-center gap-2 ">
						<ButtonByIcon
							button_styles="bg-red-500 border-red-500 
							hover:text-red-500"
							icon={ICONS.delete}
							onClick={(e) => remove_item()}
						/>
						<ButtonByIcon
							icon={ICONS.refresh}
							onClick={(e) =>
								router.push(
									`/pc-builder/choose?category=${category?.key}`
								)
							}
						/>
					</div>
				) : (
					<PrimaryButton
						onClick={() =>
							router.push(
								`/pc-builder/choose?category=${category?.key}`
							)
						}
						title="Choose"
					/>
				)}
			</div>
		</li>
	);
};

export default BuilderItem;

