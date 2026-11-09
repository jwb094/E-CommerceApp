import {
  StarIcon,
  WishlistIcon,
  WishlistIconFill,
} from "../../../assets/Icons";
import { Link } from "react-router";
import { useWishlistContext } from "../../../context/WishlistContext";
const placeholderImage = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="100%" height="100%" fill="#e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#475569" font-family="sans-serif" font-size="16">No image available</text></svg>',
)}`;

function ProductRectangle(props) {
  const roundedRating = Math.round(props.data.rating);
  let rating = [];
  for (let index = 0; index < roundedRating; index++) {
    rating.push(<StarIcon width={12} height={12} />);
  }

  // Access the wishlist context to manage wishlist actions.
  const { state, dispatch } = useWishlistContext();
  //  Check if the current product is already in the wishlist.
  const isWishlisted = state.wishlist.includes(props.data.id);

  return (
    <section data-template="ProductCard" data-view="rectangle" className="">
      <div className="conatiner">
        <div
          className="c-productCard-bloc | 
                bg-white rounded-2xl shadow-2xl mx-6 md:space-y-0 md:space-x1-10 md:m-0 md:p-6  md:w-12/12"
        >
          <div className="c-productCard-bloc-Content | flex flex-row md:gap-x-6">
            <div className="c-productCard-bloc-Content-Media p-6 md:p-0">
              <div className="bg-cyan-200 rounded-lg p-4">
                <img
                  className="w-[200px]"
                  src={props.data.media.thumbnail ?? placeholderImage}
                  alt="product title"
                />
              </div>
            </div>

            <div className="Content  py-0 px-0 flex flex-col gap-y-2 ">
              <div className="c-productCard-bloc-Content-Product">
                <h5 className="max-s-sm text-2xl  font-medium ">
                  {props.data.name}
                </h5>
                <p className="text-3xl">£{props.data.price}</p>
              </div>
              <div className="rating | flex flex-row gap-x-1 items-center">
                <small className="flex flex-row items-center">
                  {rating}&nbsp;&nbsp;({props.data.review_count})
                </small>
              </div>
              <div className="buttons flex flex-col gap-6 md:flex-row justify-between">
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
      </div>
    </section>
  );
}

export default ProductRectangle;
