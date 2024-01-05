import SignInUI from "@/components/presentation/signin/SignInUI";
import React from "react";

const SignIn = () => {
	return (
		<div
			className=" fixed top-0 bottom-0 left-0 right-0 h-screen w-screen   overflow-y-auto bg-white"
			style={{
				zIndex: 10000,
			}}
		>
			<SignInUI />
		</div>
	);
};

export default SignIn;

