export function getThumbnailImage(file: string) {
	let filename = file.split("/").pop();
	let fileURl = file.replace(filename as string, "thumb512_" + filename);

	return fileURl;
}

