import React from "react";
import { Link } from "react-router";

function GridItem(props) {
  const isOnSale = props.data.on_sale === true;

  return (
    <article
      className={[
        "box-grid__item",
        `box-grid__item--${props.gridNumber}`,
        "group relative min-h-56 overflow-hidden bg-slate-200 transition-all duration-300 ease-in-out hover:z-10 hover:shadow-xl hover:shadow-slate-300/40",
        props.classes,
      ].join(" ")}
    >
      <Link
        to={`/product/${props.data.id}/${props.data.slug}`}
        className="box-grid__link block h-full w-full"
        aria-label={props.data.name}
      >
        <div className="box-grid__media relative h-56 w-full overflow-hidden md:h-72 lg:h-80">
          <img
            className="box-grid__image absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={props.data.media.thumbnail}
            alt={props.data.name}
          />

          <div className="box-grid__overlay absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

          <div className="box-grid__pricing absolute bottom-4 right-4 z-10 flex flex-col text-right text-white">
            {isOnSale ? (
              <>
                <span className="text-sm line-through text-slate-200">£{props.data.price}</span>
                <span className="text-xl font-semibold">£{props.data.sale_price}</span>
              </>
            ) : (
              <span className="text-xl font-semibold">£{props.data.price}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default GridItem;
