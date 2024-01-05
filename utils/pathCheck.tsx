import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePathMatch = (givenPath: unknown) => {
	const router = useRouter();
	const [isMatching, setIsMatching] = useState(false);

	useEffect(() => {
		const currentPath = router.asPath;
		const isCurrentPathMatching = currentPath === givenPath;

		setIsMatching(isCurrentPathMatching);

		const handleRouteChange = (url: any) => {
			setIsMatching(url === givenPath);
		};

		// Subscribe to route changes
		router.events.on("routeChangeComplete", handleRouteChange);

		// Unsubscribe from the event to prevent memory leaks
		return () => {
			router.events.off(
				"routeChangeComplete",
				handleRouteChange
			);
		};
	}, [givenPath, router]);

	return isMatching;
};

export default usePathMatch;

