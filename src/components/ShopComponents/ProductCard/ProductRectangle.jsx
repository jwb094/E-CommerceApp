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
    rating.push(<StarIcon key={index} width={12} height={12} />);
  }

  // Access the wishlist context to manage wishlist actions.
  const { state, dispatch } = useWishlistContext();
  //  Check if the current product is already in the wishlist.
  const isWishlisted = state.wishlist.includes(props.data.id);

  return (
    <section
      data-template="ProductRectangle"
      data-view="rectangle"
      className="c-productRectangle w-full"
    >
      <div className="h-full">
        <div
          className="c-productCard-bloc | flex h-[26rem] w-full flex-col rounded-2xl bg-white p-4 shadow-2xl md:h-80 md:flex-row md:gap-6 md:p-6"
        >
          <div className="c-productCard-bloc-Content | flex h-full min-h-0 flex-col md:flex-row md:gap-6">
            <div className="c-productCard-bloc-Content-Media h-40 shrink-0 md:h-full md:w-52">
              <div className="h-full w-full overflow-hidden rounded-lg bg-cyan-200">
                <img
                  className="h-full w-full object-cover"
                  src={props.data.media.thumbnail ?? placeholderImage}
                  alt={props.data.name}
                />
              </div>
            </div>

            <div className="Content flex min-h-0 min-w-0 flex-1 flex-col gap-y-2 pt-3 md:pt-0">
              <div className="c-productCard-bloc-Content-Product">
                <h5 className="line-clamp-2 min-h-14 text-xl font-medium leading-7">
                  {props.data.name}
                </h5>
                <p className="text-2xl">£{props.data.price}</p>
              </div>
              <div className="rating | flex flex-row gap-x-1 items-center">
                <small className="flex flex-row items-center">
                  {rating}&nbsp;&nbsp;({props.data.review_count})
                </small>
              </div>
              <div className="buttons mt-auto flex flex-col gap-3 pt-3 md:flex-row">
                <Link
                  to={`/product/${props.data.id}/${props.data.slug}`}
                  className="flex-1 whitespace-nowrap rounded-md bg-slate-800 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
                >
                  View Product
                </Link>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
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
