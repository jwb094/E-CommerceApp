import React from "react";
import ProductCard from "./ProductCard/ProductCard";
function GridDisplay(props) {

    let productsToBeDisplayed =[];

    for (let index = 0; index < 12; index++) {

        productsToBeDisplayed.push(<ProductCard key={index}></ProductCard>)
    }
    

  return (
    <section data-template="display" data-view="grid" className="c-grid-View">
      <div className="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            {productsToBeDisplayed}
        </div>
        
      </div>
    </section>
  );
}

export default GridDisplay;
