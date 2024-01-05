import { useRef, useState } from "react";
import { Variants, motion } from "framer-motion";
import { ICONS } from "@/constants/ICONS";
import Link from "next/link";
import usePathMatch from "@/utils/pathCheck";
import Image from "next/image";
import Accordion from "@/components/shared/Accordion";
import { FeaturedCategoriesData } from "@/data/CategoriesList";
import { IMAGES } from "@/constants/IMAGES";

// SideMenuVariants
const ButtonVariants: Variants = {
	button_closed: {
		x: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	button_open: {
		x: 200,
		transition: {
			type: "spring",
			stiffness: 300,
			duration: 1,
			damping: 24,
		},
	},
};

//
const SideMenuVariants: Variants = {
	closed: {
		position: "unset",
		height: "30px",
		width: "30px",
		borderRadius: "999px",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.3,
		},
	},
	open: {
		position: "fixed",
		backgroundColor: "white",
		height: "100VH",
		width: "300px",
		borderRadius: "0px",
		top: "0px",
		left: "0px",
		zIndex: 999,
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.7,
			delayChildren: 0.3,
			staggerChildren: 0.05,
		},
	},
};

const MobileMenus = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			className="    overflow-hidden  "
			initial="closed"
			animate={isOpen ? "open" : "closed"}
			variants={SideMenuVariants}
		>
			<motion.div
				className={[
					"w-full cursor-pointer flex items-center justify-center  ",
					isOpen &&
						"flex items-center justify-between pr-4  shadow-sm rounded-sm",
				].join(" ")}
				// variants={{
				// 	open: {
				// 		x: 120,
				// 		transition: {
				// 			type: "spring",
				// 			bounce: 0,
				// 			duration: 0.7,
				// 			delayChildren: 0.3,
				// 			staggerChildren: 0.05,
				// 		},
				// 	},
				// 	closed: {
				// 		x: 0,
				// 		transition: {
				// 			type: "spring",
				// 			bounce: 0,
				// 			duration: 0.3,
				// 		},
				// 	},
				// }}
			>
				{isOpen && (
					<Link href={"/"}>
						<Image
							src={IMAGES.logo}
							alt="logo"
							className=""
							width={150}
							height={80}
							objectFit="fill"
						/>
					</Link>
				)}
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? ICONS.close : ICONS.hand_burger}
				</button>
			</motion.div>
			<motion.div
				className="flex flex-col gap-2 eas "
				initial={false}
				variants={{
					open: {
						clipPath: "inset(0% 0% 0% 0% round 10px)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.7,
							delayChildren: 0.3,
							staggerChildren: 0.05,
						},
					},
					closed: {
						clipPath: "inset(10% 50% 90% 50% round 10px)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.3,
						},
					},
				}}
			>
				<Link
					href={"/"}
					onClick={() => setIsOpen(!isOpen)}
					className={[
						"px-4 py-3 shadow-sm  text-base font-normal font-jakarta ",
						usePathMatch("/")
							? "text-[#FB8F2C]"
							: "text-[#111114]",
					].join(" ")}
				>
					Home
				</Link>

				<Accordion
					button_title="Categories"
					main_button_style={[
						"px-4 py-3 shadow-sm  text-base font-normal font-jakarta flex items-center justify-between ",
						usePathMatch("/c")
							? "text-[#FB8F2C]"
							: "text-[#111114]",
					].join(" ")}
					items={FeaturedCategoriesData}
					button_click={() => {
						setIsOpen(!isOpen);
					}}
				/>
				<Link
					href={"/products"}
					className={[
						"px-4 py-3 shadow-sm  text-base font-normal font-jakarta ",
						usePathMatch("/products")
							? "text-[#FB8F2C]"
							: "text-[#111114]",
					].join(" ")}
				>
					All products
				</Link>
				{/* <Link
					href={"/blogs"}
					className={[
						"px-4 py-3 shadow-sm  text-base font-normal font-jakarta ",
						usePathMatch("/blogs")
							? "text-[#FB8F2C]"
							: "text-[#111114]",
					].join(" ")}
				>
					Blogs
				</Link>
				<Link
					href={"/contact"}
					className={[
						"px-4 py-3 shadow-sm  text-base font-normal font-jakarta ",
						usePathMatch("/contact")
							? "text-[#FB8F2C]"
							: "text-[#111114]",
					].join(" ")}
				>
					Contact
				</Link> */}
			</motion.div>
		</motion.div>
	);
};

export default MobileMenus;

