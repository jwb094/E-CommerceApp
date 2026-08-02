import { createContext, useContext, useState } from "react";

export const FiltersContext = createContext(undefined);

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    prices: [],
    ratings: [],
    sale: [],
  });

  const initialFilters = {
    prices: [],
    ratings: [],
    sale: [],
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };
  const handleCheckboxChange = (category, value) => {
    setFilters((previous) => {
      const exists = previous[category].includes(value);

      return {
        ...previous,
        [category]: exists
          ? previous[category].filter((item) => item !== value)
          : [...previous[category], value],
      };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        handleCheckboxChange,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}
