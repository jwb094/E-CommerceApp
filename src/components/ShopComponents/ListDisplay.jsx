import React from "react";
import ProductRectangle from "./ProductCard/ProductRectangle";

function ListDisplay(props) {


          let productsToBeDisplayed =[];

    for (let index = 0; index < props.content.length; index++) {

        productsToBeDisplayed.push(<ProductRectangle data={props.content[index]} key={index}></ProductRectangle>)
    }

  return (
    <section data-template="display" data-view="List" className="c-listView">
      <div className="container">
        <div class="flex flex-col gap-y-12">
          {productsToBeDisplayed}
        </div>
      </div>
    </section>
  );
}

export default ListDisplay;
