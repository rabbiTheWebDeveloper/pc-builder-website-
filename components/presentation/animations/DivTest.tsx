import React from "react";
import { motion } from "framer-motion";

const DivTest = () => {
	return (
		<div className=" min-h-[300px] bg-white flex  items-center justify-center">
			<motion.div
				className="h-40 w-40 border-4 bg-slate-900 border-red-400 border-dashed rounded-full"
				// animate={{ x: 100 }}
				// transition={{ ease: "easeOut", duration: 2 }}

				// initial={{ opacity: 0, scale: 0.5 }}
				// animate={{ opacity: 1, scale: 1 }}
				// transition={{
				// 	duration: 0.8,
				// 	delay: 0.5,
				// 	ease: [0, 0.71, 0.2, 1.01],
				// }}

				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 180, 180, 0],
					borderRadius: [
						"0%",
						"0%",
						"50%",
						"50%",
						"0%",
					],
				}}
				transition={{
					duration: 10,
					ease: "easeInOut",
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatDelay: 10,
				}}
			/>
		</div>
	);
};

export default DivTest;

