import React from "react";
import FilterSection from "./Filters/FilterSection";
function Filters(props) {
  const prices = [
    { id: 20, label: "£20" },
    { id: 30, label: "£30" },
    { id: 40, label: "£40" },
    { id: 50, label: "£50" },
    { id: 60, label: "£60" },
    { id: 70, label: "£70" },
    { id: 80, label: "£80" },
    { id: 90, label: "£90" },
    { id: 100, label: "£100+" },
  ];

  return (
    <section
      data-template="filters"
      data-view="default"
      className="c-filters | px-4 py-6  bg-teal-400 md:w-3/12"
    >
      <FilterSection  filterCategory={"prices"} title={"price"} options={prices} />
    </section>
  );
}

export default Filters;
