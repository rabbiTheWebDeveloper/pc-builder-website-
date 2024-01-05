import { cn } from "@/utils/classNames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ICategory = {
	title: string;
	image_url: string;
	text_styles?: string;
	card_styles?: string;
	category_key?: string;
};
const Category = ({
	title,
	image_url,
	text_styles,
	card_styles,
	category_key,
}: ICategory) => {
	return (
		<Link
			href={`/c/${category_key}`}
			className={cn(
				"  w-[100px] md:w-[130px] h-[100px]  md:h-[130px] rounded-full flex flex-col gap-1 items-center justify-center ",
				card_styles
			)}
		>
			<Image
				alt=""
				src={image_url}
				width={40}
				height={40}
				className="object-cover hidden md:block  overflow-hidden"
			/>
			<p
				className={cn(
					"text-base  px-2 font-medium font-libre text-center flex-none",
					text_styles
				)}
			>
				{title}
			</p>
		</Link>
	);
};

export default Category;

