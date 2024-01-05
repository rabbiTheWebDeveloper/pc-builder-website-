/* eslint-disable @next/next/no-img-element */
import WriteReviewForm from "@/components/core/ProductDetails/WriteReviewForm";
import Description from "@/components/shared/Description";
import Rating from "@/components/shared/Rating";
import Title from "@/components/shared/Title";
import { IReview } from "@/types/CommonType";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Reviews = ({ reviews }: { reviews: IReview[] }) => {
	const { data: user_session } = useSession();

	const [isHaveUserReview, setIsHaveUserReview] = useState(true);

	useEffect(() => {
		setIsHaveUserReview(
			user_session
				? reviews.filter(
						(rv) =>
							rv?.reviewed_by.email ==
							user_session?.user?.email
				  )?.length > 0
					? true
					: false
				: true
		);
	}, [user_session, reviews]);

	return (
		<div className="w-full py-4 flex flex-col gap-8">
			{reviews?.map((review) => {
				return (
					<div
						key={review?._id}
						className="flex items-start justify-start gap-4"
					>
						<img
							src={
								review?.reviewed_by
									?.profile_image
									? review
											?.reviewed_by
											?.profile_image
									: "https://avatars.githubusercontent.com/u/583231?v=4"
							}
							className="h-14 w-14 rounded-lg"
							alt="image avatar"
						/>

						<div className="flex flex-col gap-4 ">
							<Title
								title={
									review
										?.reviewed_by
										?.name
								}
								className="text-base text-start"
							/>
							<Description
								description={
									review.review
								}
								className="max-w-md text-start"
							/>
							<Rating
								current_value={
									review.rating
								}
								className="justify-start"
							/>
						</div>
					</div>
				);
			})}

			{!isHaveUserReview && (
				<WriteReviewForm
					setIsHaveUserReview={setIsHaveUserReview}
				/>
			)}
		</div>
	);
};

export default Reviews;

