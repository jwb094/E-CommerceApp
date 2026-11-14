import React from "react";
import {
  StarIcon,
  WishlistIcon,
  WishlistIconFill,
} from "../../../assets/Icons";
import { useWishlistContext } from "../../../context/WishlistContext";

import { Link } from "react-router";
function ProductCard(props) {
  //logic - add Product to Cart
  // logic add href to Product details page
  const roundedRating = Math.round(props.data.rating);

  const rating = [];
  for (let index = 0; index < roundedRating; index++) {
    rating.push(<StarIcon key={index} width={12} height={12} />);
  }

  // Access the wishlist context to manage wishlist actions.
  const { state, dispatch } = useWishlistContext();
  //  Check if the current product is already in the wishlist.
  const isWishlisted = state.wishlist.includes(props.data.id);

  return (
    <section
      data-template="ProductCard"
      data-view="card"
      className="h-full min-w-0"
    >
      <div
        className="c-productCard-bloc | flex h-full w-full flex-col rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="c-productCard-bloc-Content | flex flex-1 flex-col">
          <div className="c-productCard-bloc-Content-Media">
            <div className="h-48 w-full overflow-hidden rounded-lg bg-cyan-200">
              <img
                className="h-full w-full object-cover"
                src={props.data.media.thumbnail}
                alt={props.data.name}
              />
            </div>
          </div>

          <div className="Content mt-4 flex flex-1 flex-col gap-y-2">
            <div className="c-productCard-bloc-Content-Product">
              <h5 className="line-clamp-2 min-h-12 text-lg font-bold leading-6">
                {props.data.name}
              </h5>
              <p className="text-lg">£{props.data.price}</p>
            </div>

            <div className="mt-auto flex flex-col gap-y-3 pt-4">
              <Link
                to={`/product/${props.data.id}/${props.data.slug}`}
                className="flex-1 text-center rounded-md bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 "
              >
                View Product
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                onClick={() =>
                  isWishlisted
                    ? dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: { id: props.data.id },
                      })
                    : dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: { id: props.data.id },
                      })
                }
              >
                {isWishlisted ? (
                  <WishlistIconFill width={20} height={20} />
                ) : (
                  <WishlistIcon width={20} height={20} />
                )}

                {isWishlisted ? (
                  <span className="ml-2 text-sm text-green-600">
                    Remove from Wishlist
                  </span>
                ) : (
                  <span className="ml-2 text-sm text-green-600">
                    Add to Wishlist
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
