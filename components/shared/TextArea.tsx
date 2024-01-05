import { cn } from "@/utils/classNames";

type ITextInput = {
	label?: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	currentValue: string;
	placeHolder: string;
	className?: string;
	required?: boolean;
	row?: number;
};

const TextArea = ({
	label,
	onChange,
	currentValue,
	placeHolder,
	className,
	required,
	row,
}: ITextInput) => {
	const defaultClassValue =
		"border border-white rounded min-h-20 px-4 py-5 font-inter text-white   bg-transparent outline-none ";
	return (
		<div className="flex flex-col gap-2 ">
			{label && <label htmlFor="text-box"> {label}</label>}{" "}
			<textarea
				id="text-box"
				className={cn(className, defaultClassValue)}
				value={currentValue}
				onChange={onChange}
				placeholder={placeHolder}
				required={required ?? false}
				rows={row ?? 3}
			/>
		</div>
	);
};

export default TextArea;

