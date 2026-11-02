import React from "react";
import "../../../assets/styles/GridItem.scss"

function GridItem(props) {

  return (
    <div class={`grid-item grid-item-${props.gridNumber} | min-h-56 ${props.classes} bg-red-400 md:h-auto md:w-auto`}>
      <a href={`/product/${props.data.id}/${props.data.slug}`}>
        <div class="p-6 relative">
          {/* Sale  */}
          {props.data.on_sale === true && (
            <div class="c-pricing | flex flex-col  |  absolute bottom-6 right-10">
              <p class="original text-[16px] text-white">£{props.data.price}</p>
              <p class="sale text-[20px] text-white">£{props.data.sale_price}</p>
            </div>
          )}
             {/* Not On Sale  */}
            {props.data.on_sale !== true && (
            <div class="c-pricing | flex flex-col  |  absolute bottom-6 right-10">
              <p class="sale text-[20px] text-white">£{props.data.price}</p>
            </div>
          )}
          <img className="md:h-96 object-contain" src={props.data.media.thumbnail} alt="" />
        </div>
      </a>
    </div>
  );
}

export default GridItem;
