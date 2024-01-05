import { IProduct } from "@/types/CommonType";
import { createContext, useContext } from "react";
// Define the type for the context data
export interface AppContextData {
	builder_items: {
		[key: string]: IProduct;
	};
}

// Define a separate interface for the functions
export interface AppContextFunctions {
	setContextState: (data: Partial<AppContextData>) => void;
}

// Combine the data and functions into one type
export type AppContextValue = AppContextData & AppContextFunctions;

// Create the context
const StoreContext = createContext<AppContextValue | undefined>(undefined);

// Custom hook to access the context
const useAppContext = () => {
	const context = useContext(StoreContext);
	if (!context) {
		throw new Error(
			"useAppContext must be used within an AppProvider"
		);
	}
	return context;
};

export { StoreContext, useAppContext };

