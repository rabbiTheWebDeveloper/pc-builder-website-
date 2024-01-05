import Link from "next/link";
import Image from "next/image";
import DropDown from "../../shared/DropDown";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ICONS } from "@/constants/ICONS";
import usePathMatch from "@/utils/pathCheck";
import MobileMenus from "./MobileMenus";
import { signOut, useSession } from "next-auth/react";
import { FeaturedCategoriesData } from "@/data/CategoriesList";
import { IMAGES } from "@/constants/IMAGES";
import { useEffect, useState } from "react";

const Header = () => {
	const { data: user_session } = useSession();

	const [userDropDown, setUserDropDOwn] = useState(
		Array<{
			image: string; //svg image
			name: string;
			key?: string;
			url?: string;
			func?: () => void;
		}>
	);

	useEffect(() => {
		if (user_session && user_session.user) {
			setUserDropDOwn([
				{
					image: IMAGES.email,
					name: user_session?.user?.email ?? "",
					key: "",
				},
				{
					image: IMAGES.logout,
					name: "Logout",
					key: "",
					func: () => {
						signOut();
					},
				},
			]);
		}
	}, [user_session]);

	const [top, setTop] = useState(true);
	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 20 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<div
			className={[
				" px-4 md:px-0 bg-[#111114] z-50 sticky inset-0 top-0 ",
				!top &&
					"bg-[#060607] shadow-lg   bg-opacity-95 transition duration-300 ease-in-out ",
			].join(" ")}
		>
			<div className="    max-w-project  h-[80px]  mx-auto flex items-center justify-between py-2">
				{/* Desktop Menus */}
				<div className=" hidden md:flex items-center justify-start gap-8">
					<Link
						href={"/"}
						className={[
							"text-base font-normal font-jakarta ",
							usePathMatch("/")
								? "text-[#FB8F2C]"
								: "text-white",
						].join(" ")}
					>
						Home
					</Link>

					<DropDown
						title="Categories"
						main_btn_styles="text-base font-normal font-jakarta text-] flex items-center gap-1  text-white
					focus:text-[
					#FB8F2C]"
						items={FeaturedCategoriesData}
						menu_items_styles="left-0"
					/>
					<Link
						href={"/products"}
						className={[
							"text-base font-normal font-jakarta ",
							usePathMatch("/products")
								? "text-[#FB8F2C]"
								: "text-white",
						].join(" ")}
					>
						All products
					</Link>
					{/* <Link
						href={"/blogs"}
						className={[
							"text-base font-normal font-jakarta ",
							usePathMatch("/blogs")
								? "text-[#FB8F2C]"
								: "text-white",
						].join(" ")}
					>
						Blogs
					</Link>
					<Link
						href={"/contact"}
						className={[
							"text-base font-normal font-jakarta ",
							usePathMatch("/contact")
								? "text-[#FB8F2C]"
								: "text-white",
						].join(" ")}
					>
						Contact
					</Link> */}
				</div>

				{/* Mobile */}
				<div className="block md:hidden">
					<MobileMenus />
				</div>
				{/* logo Image */}
				<div className="absolute inset-0 ml-12  sm:mx-auto my-auto w-[100px]   md:w-[150px] h-[80px]  ">
					<Link href={"/"}>
						<Image
							src={IMAGES.logo}
							alt="logo"
							fill
							className=" object-cover"
						/>
					</Link>
				</div>

				<div className="flex items-center justify-end gap-7">
					{/* Pc builder*/}
					<Link
						href={"/pc-builder"}
						className={[
							"text-base font-normal font-jakarta ",
							usePathMatch("/pc-builder")
								? "text-[#FB8F2C]"
								: "text-white",
						].join(" ")}
					>
						PC Builder
					</Link>

					{/* sign in  */}
					{!user_session?.user?.email && (
						<Link
							href={"/signin"}
							className={[
								"text-base font-normal font-jakarta  text-white",
							].join(" ")}
						>
							Sign in
						</Link>
					)}
					{/* Profile  */}

					{user_session?.user?.email && (
						<DropDown
							title={
								user_session?.user
									.name as string
							}
							main_btn_styles="text-base font-normal font-jakarta text-] flex items-center gap-1  text-white
					focus:text-[
					#FB8F2C]"
							items={userDropDown}
							menu_items_styles="right-0"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;

