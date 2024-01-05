import SecondaryButton from "@/components/shared/SecondaryButton";
import { IMAGES } from "@/constants/IMAGES";
import { IProduct } from "@/types/CommonType";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroBanner = ({ product }: { product: IProduct }) => {
	const router = useRouter();
	return (
		<div className="   mx-auto bg-transparent w-full flex flex-col md:flex-row items-center justify-start  gap-8">
			{/* desc */}
			<div>
				<p className=" text-base font-jakarta text-[#FFFFFF] ">
					Hi, new friend!
				</p>
				<p className=" max-w-2xl mt-3  text-4xl md:text-6xl  font-libre  capitalize text-[#fff] ">
					Craft Your Perfect PC: Empowering Your
					Digital Odyssey!
				</p>
				<p className="max-w-lg  mt-5 text-base font-jakarta text-[#FFFFFF] ">
					{product?.short_desc}
				</p>

				{/* button */}
				<SecondaryButton
					onClick={(e) =>
						router.push(
							`/products/${product._id}`
						)
					}
					title={product.name}
					button_styles="mt-10 text-primary"
				/>
			</div>
			{/* image */}
			<div className=" flex-grow md:flex-none flex flex-col sm:flex-row sm:items-end">
				<div className="relative">
					{/* Main image */}
					{product?.image && (
						<Image
							src={`${IMAGES?.shop1}`}
							width={370}
							height={436}
							alt="test"
							className="  rounded-r-2xl"
						/>
					)}
					{/* price tag */}
					<p className="bg-[#FB8F2C] text-white px-4 py-3  text-2xl  font-semibold font-libre absolute  bottom-20  sm:-left-8">
						Price:$${product.price}
					</p>
				</div>
				{/* Thumb images */}
				{/* <div className="flex flex-row sm:flex-col gap-2 sm:gap-8 w-[100px] h-full ">
					<Image
						src={"/Images/image80.png"}
						width={80}
						height={80}
						className="sm:ml-5"
						alt="test"
					/>
					<Image
						src={
							product?.image
								? `${product?.image}.png`
								: `/Images/image-1.png`
						}
						width={80}
						height={80}
						alt="test"
					/>
				</div> */}
			</div>
		</div>
	);
};

export default HeroBanner;

