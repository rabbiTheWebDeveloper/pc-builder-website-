import { ReactNode, useState } from "react";
import { Tab } from "@headlessui/react";
import { cn } from "@/utils/classNames";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type IButton = {
	title: string;
	icon?: React.ReactNode;
	className?: string;
};
type IDescription = {
	desc?: string;
	className?: string;
	description_component?: ReactNode;
};

type ITab = {
	buttons: IButton[];
	descriptions: IDescription[];
};

export default function TabCard({ buttons, descriptions }: ITab) {
	return (
		<div className="w-full px-2 py-16 sm:px-0">
			<Tab.Group>
				<Tab.List className=" relative flex space-x-2 after:h-[0.9px] after:w-full after:absolute after:bottom-0 after:bg-white/80 after:z-0 after:bg-opacity-5">
					{buttons.map((button) => (
						<Tab
							key={button.title}
							className={({ selected }) =>
								classNames(
									"w-auto px-2 py-2",
									"text-lg font-jakarta font-bold text-white",
									selected
										? " z-10 border-b border-primary"
										: "border-b border-transparent"
								)
							}
						>
							{button.title}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{descriptions?.map((description, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames(
								"bg-transparent py-5",
								" "
							)}
						>
							{description?.desc && (
								<p
									className={cn(
										"text-white font-jakarta text-base",
										description.className
									)}
								>
									{
										description?.desc
									}
								</p>
							)}
							{description?.description_component &&
								description?.description_component}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

