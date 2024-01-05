import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { cn } from "@/utils/classNames";

type IItems = {
	image: string; //svg image
	name: string;
	key?: string;
	url?: string;
	func?: () => void;
};

type IDropDOwn = {
	title: string;
	menu_items_styles?: string;
	main_btn_styles: string;
	items: IItems[];
};

export default function DropDown({
	title,
	main_btn_styles,
	items,
	menu_items_styles,
}: IDropDOwn) {
	const router = useRouter();
	return (
		<Menu
			as="div"
			className="relative inline-block text-left"
		>
			<div>
				<Menu.Button className={main_btn_styles}>
					{title}
					<ChevronDownIcon
						className=" h-5 w-5  text-current"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					className={cn(
						"absolute z-60  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
						menu_items_styles
					)}
				>
					<div className="px-1 py-1 ">
						{items.map((item) => {
							return (
								<Menu.Item
									key={item?.name}
								>
									{({
										active,
									}) => (
										<button
											onClick={() => {
												item?.url &&
													router.push(
														`${item.url}`
													);
												item?.func &&
													item?.func();
											}}
											className={`${
												active
													? "bg-[#FB8F2C] bg-opacity-20 text-[#FB8F2C]"
													: "text-[#FB8F2C]"
											} group flex  w-full items-center gap-4 rounded-md px-2 py-2 text-sm font-jakarta`}
										>
											<Image
												src={`${item?.image}`}
												width={
													20
												}
												height={
													20
												}
												alt={
													item?.name
												}
												className="flex-none"
											/>
											<span className="flex-grow  text-start truncate">
												{
													item?.name
												}
											</span>
										</button>
									)}
								</Menu.Item>
							);
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

