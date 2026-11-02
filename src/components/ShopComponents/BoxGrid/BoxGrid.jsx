import React from "react";
import GridItem from "./GridItem";
import "../../../assets/styles/boxGrid.scss"

const cornerClasses = [
  "rounded-tl-4xl",
  "rounded-tr-4xl",
  "rounded-bl-4xl",
  "rounded-br-4xl",
];

function BoxGrid(props) {
  const boxitems = props.data.map((item, index) => (
    <GridItem
      key={item.id}
      data={item}
      gridNumber={index}
      classes={cornerClasses[index] ?? ""}
    />
  ));

  return (
    <section  data-template="box-Grid" data-view="default"  class="container">
      <div class="grid grid-cols-2 gap-4 md:gap-x-6 md:gap-y-6">

        {boxitems}
        {/* <div class="grid-item grid-item-1 | min-h-56 rounded-tl-4xl bg-red-400 md:h-72 md:w-64">
          <a href="#">
            <div class="p-6">
              <img src="https://placehold.co/300x350" alt="" />
            </div>
          </a>
        </div>

        <div class="grid-item grid-item-2 min-h-56 rounded-tr-4xl bg-red-400 md:h-72 md:w-64">
          <a href="#">
            <div class="p-6">
              <img src="https://placehold.co/300x350" alt="" />
            </div>
          </a>
        </div>
        <div class="grid-item grid-item-3 | min-h-56 rounded-bl-4xl bg-red-400 md:h-72 md:w-64">
          <a href="#">
            <div class="p-6">
              <img src="https://placehold.co/300x350" alt="" />
            </div>
          </a>
        </div>
        <div class="grid-item grid-item-4 | min-h-56 rounded-br-4xl bg-red-400 md:h-72 md:w-64">
          <a href="#">
            <div class="p-6">
              <img src="https://placehold.co/300x350" alt="" />
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default BoxGrid;
