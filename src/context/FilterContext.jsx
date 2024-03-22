import { createContext, useContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
	const value = { a: 1 };

	return (
		<FilterContext.Provider value={value}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilter = () => {
	const context = useContext(FilterContext);
	return context;
};
