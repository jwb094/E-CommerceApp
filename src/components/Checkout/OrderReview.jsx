import { getProductById } from "../../utils/functions";
function OrderReview({ orderData, basketItems }) {
  const { customer, delivery, payment } = orderData;
  const items = basketItems
    .map((item) => ({
      ...item,
      product: getProductById(item.product_id),
    }))
    .filter((item) => item.product);
  const deliveryCharge = 4.99;
  const discount = 0;
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const orderTotal = subtotal + deliveryCharge - discount;

  const paymentMethod =
    payment.method === "credit-debit-card"
      ? "Credit / Debit Card"
      : payment.method === "paypal"
        ? "PayPal"
        : "Not selected";

  function displayValue(value) {
    return value || "Not provided";
  }

  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 font-medium text-slate-800">Customer</h4>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-slate-500">Name</dt>
              <dd className="text-slate-800">
                {displayValue(
                  [customer.firstName, customer.lastName]
                    .filter(Boolean)
                    .join(" "),
                )}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Email</dt>
              <dd className="text-slate-800">{displayValue(customer.email)}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Telephone</dt>
              <dd className="text-slate-800">
                {displayValue(customer.telephone)}
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h4 className="mb-3 font-medium text-slate-800">Delivery</h4>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-slate-500">Address line 1</dt>
              <dd className="text-slate-800">
                {displayValue(delivery.addressLine1)}
              </dd>
            </div>
            {delivery.addressLine2 !== "" && (
              <>
                <div>
                  <dt className="text-slate-500">Address line 2</dt>
                  <dd className="text-slate-800">
                    {displayValue(delivery.addressLine2)}
                  </dd>
                </div>
              </>
            )}

            <div>
              <dt className="text-slate-500">Postcode</dt>
              <dd className="text-slate-800">
                {displayValue(delivery.postcode)}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">City</dt>
              <dd className="text-slate-800">{displayValue(delivery.city)}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h4 className="mb-3 font-medium text-slate-800">Payment</h4>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-slate-500">Method</dt>
              <dd className="text-slate-800">{paymentMethod}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-6">
        <h4 className="mb-3 font-medium text-slate-800">Basket</h4>
        {items.length === 0 ? (
          <p className="text-sm text-slate-600">Your basket is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-slate-200">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between gap-4 py-3 text-sm"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={product.media.thumbnail}
                      alt={product.name}
                      className="h-16 w-16 shrink-0 rounded-md bg-slate-100 object-contain"
                    />
                    <div>
                      <p className="font-medium text-slate-800">
                        {product.name}
                      </p>
                      <p className="text-slate-500">
                        £{product.price.toFixed(2)} × {quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-slate-800">
                    £{(product.price * quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <dl className="mt-4 ml-auto w-full max-w-xs space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Subtotal</dt>
                <dd className="text-slate-800">£{subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Delivery charge</dt>
                <dd className="text-slate-800">£{deliveryCharge.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Discount</dt>
                <dd className="text-slate-800">−£{discount.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-200 pt-2 font-semibold">
                <dt className="text-slate-900">Order total</dt>
                <dd className="text-slate-900">£{orderTotal.toFixed(2)}</dd>
              </div>
            </dl>
          </>
        )}
      </div>
    </section>
  );
}

export default OrderReview;
