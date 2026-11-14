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
    // Use the previous state so rapid checkbox changes are applied in order.
    setFilters((previous) => {
      // Check whether this option is already selected in the requested filter group.
      const exists = previous[category].includes(value);

      return {
        // Copy the state first so selections in the other groups remain unchanged.
        ...previous,
        // Remove a checked option, or append an unchecked one to toggle it on.
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
