import React from "react";
import ProductCard from "../ShopComponents/ProductCard/ProductCard";
function RelatedProducts(props) {
  let productsToBeDisplayed = [];

  for (let index = 0; index <= 2; index++) {
    productsToBeDisplayed.push(<ProductCard key={index}></ProductCard>);
  }

  return (
    <section data-template="RelatedProducts"  data-view="default" className="c-related-products">
      <div className="container">
        <div class="flex flex-col md:flex-row gap-y-12">
            {productsToBeDisplayed}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
