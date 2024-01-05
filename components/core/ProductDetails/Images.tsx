// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import Product from "@/components/core/Product/Product";
import Image from "next/image";

const Images = ({ images }: { images: string[] }) => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 4500,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Autoplay]}
		>
			{images.map((image) => {
				return (
					<SwiperSlide
						key={image}
						className="!w-full !h-[350px] md:!h-[500px] !relative "
					>
						<Image
							alt=""
							src={image}
							fill
							className="  object-contain bg-white "
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Images;

