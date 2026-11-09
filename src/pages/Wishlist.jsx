import { Link } from "react-router";
import { useWishlistContext } from "../context/WishlistContext";
import { getProductById } from "../utils/functions";

function Wishlist() {
  const { state, dispatch } = useWishlistContext();
  const products = state.wishlist
    .map((productId) => getProductById(productId))
    .filter(Boolean);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Wishlist</h1>
      {products.length === 0 ? (
        <p className="text-slate-600">Your wishlist is empty.</p>
      ) : (
        <ul className="divide-y divide-slate-200">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center gap-4 py-4"
            >
              <img
                src={product.media.thumbnail}
                alt=""
                className="h-20 w-20 rounded-md bg-slate-100 object-contain"
              />
              <div className="min-w-0 flex-1">
                <Link
                  to={`/product/${product.id}/${product.slug}`}
                  className="font-semibold text-slate-900 hover:text-rose-600"
                >
                  {product.name}
                </Link>
                <p className="text-slate-600">£{product.price}</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: { id: product.id },
                  })
                }
                className="rounded-md px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Wishlist;