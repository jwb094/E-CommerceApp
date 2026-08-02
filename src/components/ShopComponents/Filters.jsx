import React, { useState } from "react";
import FilterSection from "./Filters/FilterSection";
import { prices, ratings, OnSale } from "../../data/filter";
import { ClosedIcon, HambugerIcon } from "../../assets/Icons";
import { useFilterContext } from "../../context/Filters";
function Filters(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { resetFilters, filters } = useFilterContext();

  return (
    <section
      data-template="filters"
      data-view="default"
      className="c-filters | px-4 py-6  bg-teal-400 md:w-auto"
    >
      <button
        className="flex flex-row gap-6 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <HambugerIcon width={24} height={24} />
        ) : (
          <ClosedIcon width={24} height={24} />
        )}
        Filters
      </button>
      <div className={isOpen ? "block" : "hidden md:block"}>
        <FilterSection
          filterCategory={"prices"}
          title={"price"}
          options={prices}
        />

        <FilterSection
          filterCategory={"ratings"}
          title={"rating"}
          options={ratings}
        />

        <FilterSection
          filterCategory={"sale"}
          title={"Sale"}
          options={OnSale}
        />

        <button
          onClick={() => resetFilters()}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}

export default Filters;
