import Title from "@/components/shared/Title";
import { ICONS } from "@/constants/ICONS";
import { IMAGES } from "@/constants/IMAGES";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInUI = () => {
	return (
		<div className="w-full h-full  bg-primary_dark grid grid-cols-1 md:grid-cols-2  ">
			<div className=" w-full h-full absolute -z-0 md:z-auto md:relative ">
				<Image
					src={IMAGES.signin}
					fill
					className=" bg-[#EFF7FE]  object-contain"
					alt="signIn"
				/>
			</div>
			<div className=" z-20 flex items-center justify-center  bg-primary_dark  opacity-70">
				<Link
					href={"/"}
					className="absolute top-20 right-20 text-lg font-libre text-white flex items-center gap-3"
				>
					Go back to home page
					{ICONS.back}
				</Link>
				<div className=" max-w-lg mx-auto flex flex-col gap-4 p-4">
					<Title title="Welcome Back !" />

					{/* <button className=" mt-10 w-full px-2 py-4 rounded-md border  border-white/80 flex gap-4 items-center justify-center ">
						<Image
							src={"/Images/google.png"}
							alt="google"
							width={30}
							height={30}
						/>
						<span className="text-base font-jakarta text-white">
							Continue with google
						</span>
					</button> */}
					<button
						onClick={() =>
							signIn("github", {
								callbackUrl:
									process.env
										.BASE_URL,
							})
						}
						className=" mt-10 w-full px-2 py-3 rounded-md border  border-white/80 flex gap-4 items-center justify-center "
					>
						<Image
							src={IMAGES.github}
							alt="google"
							width={30}
							height={30}
						/>
						<span className="text-xl font-jakarta text-white">
							Continue with github
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignInUI;

