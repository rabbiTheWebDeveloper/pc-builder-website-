import ButtonByIcon from "@/components/shared/ButtonByIcon";
import Description from "@/components/shared/Description";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Title from "@/components/shared/Title";
import { ICONS } from "@/constants/ICONS";
import { ICategory, IProduct } from "@/types/CommonType";
import { useAppContext } from "@/utils/Context";
import Image from "next/image";
import { useRouter } from "next/router";

const BuilderItemInMobile = ({ category }: { category: ICategory }) => {
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
		<div
			key={category._id}
			className=" border-b  border-b-white/80 border-opacity-20 py-4 px-4 flex flex-col gap-4 "
		>
			{/* Category */}
			<div className=" w-full   flex   gap-2 items-center justify-start ">
				{category?.image && (
					<Image
						alt="icon"
						height={40}
						width={40}
						className="text-primary fill-primary"
						src={`${category?.image}`}
					/>
				)}
				<span className="text-sm font-jakarta text-white ">
					{category?.name}
				</span>
			</div>
			{/* Product */}
			{product && (
				<div className="  ">
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
							<div className="flex items-center justify-start gap-2">
								<Title
									title={`Price`}
									className="text-start text-sm font-medium"
								/>
								<Title
									title={`$ ${product?.price}`}
									className="text-start text-sm font-normal"
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Buttons */}
			<div className="col-span-3 flex items-center justify-center">
				{product ? (
					<div className=" w-full p-2  flex items-center justify-center gap-2 ">
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
						button_styles="  py-1"
						onClick={() =>
							router.push(
								`/pc-builder/choose?category=${category?.key}`
							)
						}
						title="Choose"
					/>
				)}
			</div>
		</div>
	);
};

export default BuilderItemInMobile;

