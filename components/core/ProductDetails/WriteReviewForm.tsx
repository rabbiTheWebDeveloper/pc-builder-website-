/* eslint-disable react-hooks/exhaustive-deps */
import PrimaryButton from "@/components/shared/PrimaryButton";
import Rating from "@/components/shared/Rating";
import TextArea from "@/components/shared/TextArea";
import Title from "@/components/shared/Title";
import ToastContainer from "@/components/shared/Toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const WriteReviewForm = ({
	setIsHaveUserReview,
}: {
	setIsHaveUserReview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { data: user_session } = useSession();
	const router = useRouter();

	// Alert State
	const [isLoading, setISLoading] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [AlertType, setAlertType] = useState<
		"success" | "error" | "warning"
	>("success");
	const [AlertMessages, setAlertMessages] = useState("");

	// form state

	const [review_form, setReviewForm] = useState({
		rating: 1,
		review: "",
		product_id: router.query.id,
		reviewed_by: {
			email: user_session?.user?.email ?? "default",
			name: user_session?.user?.email ?? "Guest",
			profile_image: user_session?.user?.image,
		},
	});

	//formSubmitHandler
	const formSubmitHandler = (e: React.SyntheticEvent) => {
		setISLoading(true);
		e.preventDefault();
		const review_data = review_form;
		review_data.rating = Number(review_form.rating);

		fetch(`${process.env.BASE_URL}/api/reviews/post`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(review_data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"Network response was not ok"
					);
				}
				return response.json();
			})
			.then((data) => {
				setISLoading(false);

				// Process the response data, if any
				setAlertMessages(
					"Your review added successfully , it will show after 1 minute , please check after 1 minutes "
				);
				setAlertType("success");
				setIsAlertOpen(true);

				const timer = setTimeout(() => {
					setIsHaveUserReview(true);
				}, 5000);
				return () => clearTimeout(timer);
			})
			.catch((error) => {
				setISLoading(false);
				setAlertMessages(
					"Something is wrong with the request"
				);
				setAlertType("error");
				setIsAlertOpen(true);
			});

		// fetch()
	};

	// Input handler
	const inputChangeHandler = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
		key: string
	) => {
		if (key == "keynotes") {
			setReviewForm((prev) => ({
				...prev,
				[key]: e.target.value.split(","),
			}));
		} else {
			setReviewForm((prev) => ({
				...prev,
				[key]: e.target.value,
			}));
		}
	};

	return (
		<form
			onSubmit={formSubmitHandler}
			className="   flex   rounded-xl w-full max-w-md  flex-col gap-4   px-7  py-6 "
		>
			<Title
				title="Add your review"
				className="text-lg mb-4"
			/>
			<div className="   relative flex flex-col gap-6 ">
				{/* Review */}
				<TextArea
					placeHolder="Add your review here "
					currentValue={review_form.review}
					onChange={(e) =>
						inputChangeHandler(e, "review")
					}
					className=" border-white/80 text-white font-libre"
					required={true}
				/>

				{/* Rating */}
				{/* {/* Rating */}
				<Rating
					current_value={review_form.rating as number}
					clickHandler={(value) =>
						setReviewForm((prev) => ({
							...prev,
							["rating"]: Number(value),
						}))
					}
				/>
			</div>

			{/* Submit button */}
			<PrimaryButton
				type="submit"
				title="Submit"
				disabled={isLoading}
				isLoading={isLoading}
			/>

			{/* Toast */}
			{isAlertOpen && (
				<ToastContainer
					type={AlertType}
					messages={AlertMessages}
					isAlertOpen={isAlertOpen}
					setIsAlertOpen={setIsAlertOpen}
					className=" max-w-md w-full fixed z-40   top-24   right-0 left-0 mx-auto flex justify-center"
				/>
			)}
		</form>
	);
};

export default WriteReviewForm;

