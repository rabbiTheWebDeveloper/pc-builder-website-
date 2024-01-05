import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/router";

type IItems = {
	image: string; //svg image
	name: string;
	key?: string;
	url?: string;
};
type IAccordion = {
	button_title: string;
	items?: IItems[];
	text?: string;
	main_button_style: string;
	button_click?: () => void;
};
export default function Accordion({
	button_title,
	main_button_style,
	items,
	text,
	button_click,
}: IAccordion) {
	const router = useRouter();
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button
						className={main_button_style}
					>
						<span>{button_title}</span>
						<ChevronUpIcon
							className={`${
								open
									? ""
									: "rotate-180 transform"
							} h-5 w-5 text-current`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm flex flex-col gap-1">
						{items &&
							items?.map((item) => {
								return (
									<button
										onClick={() => {
											item?.url &&
												router.push(
													`${item.url}`
												);
											button_click &&
												button_click();
										}}
										key={
											item.name
										}
										className={` group flex  w-full items-center gap-4 rounded-md   text-sm font-jakarta text-[##111114] group-hover:text-[#FB8F2C px-5 py-2 shadow]`}
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
										/>
										{
											item.name
										}
									</button>
								);
							})}

						{text && (
							<p
								className={`w-full  rounded-md   text-sm font-jakarta text-[#111114]   px-5 py-2 shadow]`}
							>
								{text}
							</p>
						)}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

