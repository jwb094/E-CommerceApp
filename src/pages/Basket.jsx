import { Link } from "react-router";
import { useBasketContext } from "../context/BasketContext";
import { getProductById } from "../utils/functions";

function Basket() {
  const { state, dispatch } = useBasketContext();
  const items = state.items
    .map((item) => ({
      ...item,
      product: getProductById(item.product_id),
    }))
    .filter((item) => item.product);
  const grandTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">
        Shopping Basket
      </h1>
      {items.length === 0 ? (
        <div className="space-y-4">
          <p className="text-slate-600">Your basket is empty.</p>
          <Link
            to="/search"
            className="inline-flex rounded-md bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-slate-200">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
              >
                <img
                  src={product.media.thumbnail}
                  alt=""
                  className="h-24 w-24 rounded-md bg-slate-100 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <Link
                    to={`/product/${product.id}/${product.slug}`}
                    className="font-semibold text-slate-900 hover:text-slate-600"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-slate-600">
                    £{product.price.toFixed(2)} each
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={`Decrease quantity of ${product.name}`}
                    onClick={() =>
                      quantity === 1
                        ? dispatch({
                            type: "REMOVE_FROM_BASKET",
                            payload: { id: product.id },
                          })
                        : dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: { id: product.id },
                          })
                    }
                    className="h-9 w-9 rounded-md border border-slate-300 text-lg hover:bg-slate-100"
                  >
                    −
                  </button>
                  <span className="min-w-6 text-center">{quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase quantity of ${product.name}`}
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        payload: { id: product.id },
                      })
                    }
                    className="h-9 w-9 rounded-md border border-slate-300 text-lg hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
                <p className="w-24 text-right font-semibold text-slate-900">
                  £{(product.price * quantity).toFixed(2)}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_BASKET",
                      payload: { id: product.id },
                    })
                  }
                  className="text-left text-sm font-medium text-rose-600 hover:text-rose-700 sm:text-right"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-end gap-4 border-t border-slate-200 pt-6">
            <p className="text-xl font-bold text-slate-900">
              Grand total: £{grandTotal.toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="inline-flex rounded-md bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Proceed to checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Basket;