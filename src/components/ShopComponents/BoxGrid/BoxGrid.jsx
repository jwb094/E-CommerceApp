import React from "react";
import GridItem from "./GridItem";
import "../../../assets/styles/boxGrid.scss";

const cornerClasses = [
  "rounded-tl-[2.5rem]",
  "rounded-tr-[2.5rem]",
  "rounded-bl-[2.5rem]",
  "rounded-br-[2.5rem]",
];

function BoxGrid(props) {
  const boxitems = props.data.map((item, index) => (
    <GridItem
      key={item.id}
      data={item}
      gridNumber={index}
      classes={cornerClasses[index] ?? "rounded-[2rem]"}
    />
  ));

  return (
    <section
      data-template="box-Grid"
      data-view="default"
      className="box-grid container mx-auto w-full"
    >
      <div className="box-grid__list group grid grid-cols-2 gap-4 md:gap-6">
        {boxitems}
      </div>
    </section>
  );
}

export default BoxGrid;
