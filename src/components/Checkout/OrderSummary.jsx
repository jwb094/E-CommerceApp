import { getProductById } from "../../utils/functions";

function OrderSummary({ order }) {
  if (!order) {
    return (
      <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600">Order details are not available.</p>
      </section>
    );
  }

  const items = order.items
    .map((item) => ({
      ...item,
      product: getProductById(item.product_id),
    }))
    .filter((item) => item.product);
  const paymentMethod =
    order.payment === "credit-debit-card"
      ? "Credit / Debit Card"
      : order.payment === "paypal"
        ? "PayPal"
        : "Not selected";

  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-800">
        Order confirmation
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Order number: <span className="font-medium">{order.orderNumber}</span>
      </p>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 font-medium text-slate-800">Customer</h4>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-slate-500">Name</dt>
              <dd className="text-slate-800">
                {[order.customer.firstName, order.customer.lastName]
                  .filter(Boolean)
                  .join(" ") || "Not provided"}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Email</dt>
              <dd className="text-slate-800">
                {order.customer.email || "Not provided"}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Telephone</dt>
              <dd className="text-slate-800">
                {order.customer.telephone || "Not provided"}
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h4 className="mb-3 font-medium text-slate-800">Delivery</h4>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-slate-500">Address</dt>
              <dd className="text-slate-800">
                {[
                  order.delivery.addressLine1,
                  order.delivery.addressLine2,
                  order.delivery.city,
                  order.delivery.postcode,
                ]
                  .filter(Boolean)
                  .join(", ") || "Not provided"}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Payment method</dt>
              <dd className="text-slate-800">{paymentMethod}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h4 className="mb-3 font-medium text-slate-800">Items</h4>
        {items.length === 0 ? (
          <p className="text-sm text-slate-600">No items in this order.</p>
        ) : (
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
                    <p className="font-medium text-slate-800">{product.name}</p>
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
        )}

        <dl className="mt-4 ml-auto w-full max-w-xs space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-slate-600">Subtotal</dt>
            <dd className="text-slate-800">£{order.subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-600">Delivery charge</dt>
            <dd className="text-slate-800">
              £{order.deliveryCharge.toFixed(2)}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-600">Discount</dt>
            <dd className="text-slate-800">−£{order.discount.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-slate-200 pt-2 font-semibold">
            <dt className="text-slate-900">Order total</dt>
            <dd className="text-slate-900">£{order.total.toFixed(2)}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default OrderSummary;
