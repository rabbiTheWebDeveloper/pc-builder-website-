// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import Product from "@/components/core/Product/Product";
import { ICONS } from "@/constants/ICONS";
import Feature from "@/components/core/feature/Feature";

const KeyFeatures = () => {
	return (
		<div className="w-full bg-primary py-8 ">
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={40}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 7500,
					disableOnInteraction: false,
				}}
				modules={[Navigation, Autoplay]}
			>
				{pcBuilderFeatures?.map((feature) => {
					return (
						<SwiperSlide
							className="!w-auto   "
							key={feature.title}
						>
							<Feature
								icon={feature.icon}
								title={feature.title}
							/>
						</SwiperSlide>
					);
				})}

				{/* <div className="flex items-center justify-end gap-5 my-5">
				<SwiperButtonPrev />
				<SwiperButtonNext />
			</div> */}
			</Swiper>
		</div>
	);
};

export default KeyFeatures;

const pcBuilderFeatures = [
	{
		title: "Component Selection",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M10 2c-.553 0-1 .447-1 1v5.586l-3.293 3.293c-.39.39-.586.902-.586 1.414s.196 1.024.586 1.414c.781.781 2.047.781 2.828 0l2.586-2.586 2.586 2.586c.39.39.902.586 1.414.586s1.024-.196 1.414-.586c.781-.781.781-2.047 0-2.828l-3.293-3.293v-5.586c0-.553-.447-1-1-1zm0 2h4v3h-4zm0 5h2v2h-2zm3 0h2v2h-2zm-6 4v2h8v-2h-8zm0 3v2h8v-2h-8z" />
			</svg>
		),
	},
	{
		title: "Compatibility Checks",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M11 20h2v2h-2zm1-18c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm1 14h-2v-6h2zm0-8h-2v-2h2z" />
			</svg>
		),
	},
	{
		title: "Customization Options",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M17.71 6.29l-4-4c-.195-.195-.45-.292-.71-.29s-.514.11-.71.29l-4 4c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.29-1.29v5.59l-3.29 3.29c-.195.195-.29.45-.29.71s.11.515.29.71c.39.39 1.02.39 1.41 0l4-4c.195-.195.29-.45.29-.71s-.11-.514-.29-.71l-3.29-3.29v-1.59l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41zm4.58-2.29c-.39-.39-1.02-.39-1.41 0l-1.29 1.29v-5.59l3.29-3.29c.195-.195.29-.45.29-.71s-.11-.514-.29-.71c-.39-.39-1.02-.39-1.41 0l-4 4c-.195.195-.29.45-.29.71s.11.515.29.71l3.29 3.29v1.59l-1.29-1.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4 4c.195.195.45.292.71.29s.514-.11.71-.29l4-4c.39-.39.39-1.02 0-1.41z" />
			</svg>
		),
	},
	{
		title: "Real-Time Updates",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M12 2c-.553 0-1 .447-1 1v4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-.553-.447-1-1-1s-1 .447-1 1c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6v-4c0-.553-.447-1-1-1zm7 7h-2.823l1.061-1.061c.586-.586.586-1.536 0-2.122s-1.536-.586-2.121 0l-3.536 3.536c-.293.293-.439.677-.439 1.061s.146.768.439 1.061l3.536 3.536c.293.293.677.439 1.061.439s.768-.146 1.061-.439c.586-.586.586-1.536 0-2.122l-1.061-1.061h2.823v-2z" />
			</svg>
		),
	},
	{
		title: "Budget and Performance Sliders",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M7 2c-.553 0-1 .447-1 1v3h2v2h-2v2h2v2h-2v2h2v3c0 .553.447 1 1 1s1-.447 1-1v-3h-2v-2h2v-2h-2v-2h2v-3c0-.553-.447-1-1-1zm3 4v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm3-16h7v2h-7zm0 4h5v2h-5zm0 4h3v2h-3zm0 4h1v2h-1zm0 4h3v2h-3z" />
			</svg>
		),
	},
	{
		title: "User Accounts and Saved Builds",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M7.05 10c0-1.3 1.13-2.31 2.22-2.31.79 0 1.58.54 2.13 1.23l.23.31.24-.31c.56-.7 1.4-1.23 2.37-1.23 1.09 0 2.31 1.01 2.31 2.31 0 .91-.42 1.72-1.05 2.28l-1.6 1.6c-.32.32-.32.84 0 1.16.3.32.79.32 1.1 0l1.69-1.69c1.02-.63 1.66-1.79 1.66-3.14 0-2.2-1.8-4-4-4-1.26 0-2.38.61-3.07 1.55-.08.12-.15.25-.23.38l-.38.61-.38-.61c-.68-.94-1.8-1.55-3.06-1.55-2.2 0-4 1.8-4 4 0 1.35.64 2.51 1.66 3.14l1.68 1.69c.31.32.79.32 1.1 0 .31-.32.31-.84 0-1.16l-1.6-1.6c-.63-.56-1.05-1.37-1.05-2.28zm1.95 6.61c-1.11 1.16-1.82 1.88-2.45 2.39h14.88c-.63-.51-1.34-1.23-2.45-2.39-1.55-1.64-3.42-3.61-4.43-4.85-.33-.42-.89-.74-1.47-.74s-1.14.32-1.47.74c-1.01 1.24-2.88 3.21-4.43 4.85zm3.95-2.61c1.19 0 2.16-.97 2.16-2.16s-.97-2.16-2.16-2.16c-1.19 0-2.16.97-2.16 2.16s.97 2.16 2.16 2.16zm1.84 8h-10c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z" />
			</svg>
		),
	},
	{
		title: "Reviews and Ratings",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M20 4h-2l-1.4-1.4C16.2 2.16 15.63 2 15.05 2H9C7.9 2 7 2.9 7 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9 20v-9h6v9H9zm2.5-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
			</svg>
		),
	},
	{
		title: "Recommendations and Warnings",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M12 2l-.3.3C8.11 4.86 6 8.14 6 12c0 2.64 1.11 5 2.89 6.7L12 22l3.11-3.3C16.89 17 18 14.64 18 12c0-3.86-2.11-7.14-5.7-9.7L12 2zm-1 16v2h2v-2h-2zm0-10v8h2V8h-2z" />
			</svg>
		),
	},
	{
		title: "Pre-Built Configurations",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12zM6 6v12h12V6H6zm8 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 8h2v2h-2v-2z" />
			</svg>
		),
	},
	{
		title: "Integration with Retailers",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M4 3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H5V5h2V4c0-.55-.45-1-1-1zm16 0c-.55 0-1 .45-1 1v2h-2V4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h2v2h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v2h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v4h-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1V6.5c0-.55-.45-1-1-1s-1 .45-1 1v1h-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-3 10V9H7v4h10zm2 1v2H5v-2h14z" />
			</svg>
		),
	},
	{
		title: "Community and Support",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M16.01 7.56l2.54-2.54a1 1 0 0 1 1.41 0c.37.37.37.96 0 1.32L17.42 9.4l1.13 1.13-3.75 3.75-5.42-5.42a4.008 4.008 0 0 1-.32-5.33 4.008 4.008 0 0 1 5.33-.32L16.01 7.56zm2.42 3.37l-2.46-2.46 1.5-1.5a2.008 2.008 0 0 0 .3-2.54 2.008 2.008 0 0 0-2.54-.3L7.65 10.7c-.37.37-.58.86-.62 1.39-.16 2.65 2.14 4.85 4.78 4.69 1.58-.08 2.95-.92 3.57-2.26l3.14 3.14 1.27-1.27-3.13-3.13zM3.71 3.29a1 1 0 0 1 1.41 0L16 15.59l-1.42 1.42-9.88-9.88a1 1 0 0 1 0-1.42z" />
			</svg>
		),
	},
	{
		title: "Educational Resources",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M20 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6v2H9v1.25a0.75 0.75 0 0 0 1.5 0V19h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM9 14H7v-3H4v3H2V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7zm11-3a1 1 0 0 1 0 2 1 1 0 0 1 0-2zm0 6a1 1 0 0 1 0 2 1 1 0 0 1 0-2z" />
			</svg>
		),
	},
	{
		title: "Compatibility Certificates",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M7.35 3.16A5.978 5.978 0 0 0 12 2a5.978 5.978 0 0 0 4.65 1.16A7.001 7.001 0 0 0 19 12c0 1.01-.21 1.97-.59 2.84l2.46 2.46 1.42-1.41L2.39 2.39 1 3.79l6.35 6.35a2.993 2.993 0 0 1 .46-1.38l-.52-.52zM12 19c-.41 0-.8-.08-1.16-.21l1.54-1.54c.12.07.25.11.38.16V19zm6.19-3.04A7.023 7.023 0 0 0 20 12a6.99 6.99 0 0 0-2.04-4.95l1.45-1.45A8.933 8.933 0 0 1 22 12a8.933 8.933 0 0 1-2.81 6.55l1.45-1.45zM8.25 10.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0z" />
			</svg>
		),
	},
	{
		title: "VR and AR Visualization",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M17 9h4a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-2v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4H9a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5a5.978 5.978 0 0 1 4.65 2.18 1 1 0 0 1-.77 1.82A3.998 3.998 0 0 0 14 6H9a1 1 0 0 0-1 .99V9h9a1 1 0 0 1 1 1zm4 10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3v5h3zm2-11h-2V6h2v2z" />
			</svg>
		),
	},
];

