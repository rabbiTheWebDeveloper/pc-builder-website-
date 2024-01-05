import { cn } from "@/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import PrimaryButton from "./PrimaryButton";

type ModalButton = {
	title: string;
	className: string;
	disabled: boolean;
};
type ModalDialog = {
	title?: string;
	description?: string;
	components?: ReactNode;
	close_button_title: string;
	close_button_click?: () => void;
};
type IModal = {
	modal_button: ModalButton;
	modal_dialog: ModalDialog;
};

export default function Modal({ modal_button, modal_dialog }: IModal) {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<PrimaryButton
				onClick={openModal}
				disabled={modal_button.disabled ?? false}
				title={modal_button.title}
				button_styles={modal_button.className}
			/>

			<Transition
				appear
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative   "
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0    overflow-y-auto z-50">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									{modal_dialog.title && (
										<Dialog.Title
											as="h3"
											className="text-lg font-medium leading-6 text-gray-900"
										>
											{
												modal_dialog.title
											}
										</Dialog.Title>
									)}
									<div className="mt-2">
										{modal_dialog?.description && (
											<p className="text-sm text-gray-500">
												{
													modal_dialog?.description
												}
											</p>
										)}

										{modal_dialog?.components &&
											modal_dialog.components}
									</div>

									<div className="mt-4 flex items-end justify-end">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => {
												closeModal();
												modal_dialog?.close_button_click &&
													modal_dialog?.close_button_click();
											}}
										>
											{
												modal_dialog.close_button_title
											}
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

