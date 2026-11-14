import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { getProductById } from "../utils/functions";
import CustomerDetails from "../components/Checkout/CustomerDetails";
import DeliveryDetails from "../components/Checkout/DeliveryDetails";
import PaymentDetails from "../components/Checkout/PaymentDetails";
import OrderReview from "../components/Checkout/OrderReview";
import OrderSummary from "../components/Checkout/OrderSummary";
import { useBasketContext } from "../context/BasketContext";

function Checkout() {
  // The checkout is a multi-step flow: customer info, delivery, payment, review, and confirmation.
  const { state: basketState, dispatch: basketDispatch } = useBasketContext();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const customerDetailsFormRef = useRef(null);
  const deliveryDetailsFormRef = useRef(null);
  const paymentDetailsFormRef = useRef(null);

  // Track the current form values so the review screen and final order summary can use the same data.
  const [orderData, setOrderData] = useState({
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
    },

    delivery: {
      addressLine1: "",
      addressLine2: "",
      postcode: "",
      city: "",
    },

    payment: {
      method: "",
    },
  });
  const [order, setOrder] = useState(null);
  const formTitles = [
    "Customer Details",
    "Delivery Information",
    "Payment Information",
    "Order Review",
    "Order Summary",
  ];
  const deliveryCharge = 4.99;
  const discount = 0;

  // Match basket entries to the product catalog so we can price only items that still exist.
  const items = basketState.items
    .map((item) => ({
      ...item,
      product: getProductById(item.product_id),
    }))
    .filter((item) => item.product);

  // Calculate totals from the current basket so the review and saved order agree.
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const orderTotal = subtotal + deliveryCharge - discount;

  // Validate each step's native form controls before allowing the customer to continue.
  function validateCustomerDetails() {
    return customerDetailsFormRef.current?.reportValidity() ?? false;
  }

  function validateDeliveryDetails() {
    return deliveryDetailsFormRef.current?.reportValidity() ?? false;
  }

  function validatePaymentDetails() {
    return paymentDetailsFormRef.current?.reportValidity() ?? false;
  }

  function handleNext() {
    let isValid = false;

    // Each step validates its own form before moving to the next screen.
    if (page === 0) {
      isValid = validateCustomerDetails();
    } else if (page === 1) {
      isValid = validateDeliveryDetails();
    } else if (page === 2) {
      isValid = validatePaymentDetails();
    } else if (page === 3) {
      // The review screen finalises the purchase by creating a saved order snapshot.
      isValid = true;
      handlePlaceOrder();
    }

    if (isValid) {
      setPage((currentPage) => currentPage + 1);
    }
  }

  function handlePlaceOrder() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Save a snapshot of the completed checkout so the order summary remains accurate after basket cleanup.
    setOrder({
      orderNumber: "Order-" + randomNumber,
      customer: { ...orderData.customer },
      delivery: { ...orderData.delivery },
      payment: orderData.payment.method,
      items: basketState.items.map((item) => ({ ...item })),
      subtotal,
      deliveryCharge,
      discount,
      total: orderTotal,
    });

    // After creating the order, clear the basket so the next session starts fresh.
    basketDispatch({
      type: "CLEAR_BASKET",
    });
  }

  // Return the shopper to the storefront after the order is confirmed.
  function handleContinueShopping() {
    navigate("/");
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl">Checkout Page</h1>
        <h2 className="mt-8 | text-2xl"> {formTitles[page]}</h2>
      </div>
      <div
        data-template="checkout-panel "
        className="flex min-w-[50%] justify-center"
      >
        {page === 0 && (
          <CustomerDetails
            orderData={orderData}
            setOrderData={setOrderData}
            formRef={customerDetailsFormRef}
          />
        )}
        {page === 1 && (
          <DeliveryDetails
            orderData={orderData}
            setOrderData={setOrderData}
            formRef={deliveryDetailsFormRef}
          />
        )}
        {page === 2 && (
          <PaymentDetails
            orderData={orderData}
            setOrderData={setOrderData}
            formRef={paymentDetailsFormRef}
          />
        )}
        {page === 3 && (
          <OrderReview orderData={orderData} basketItems={basketState.items} />
        )}
        {page === 4 && <OrderSummary order={order} />}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {/* <button
          type="button"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {page > 0 ? `Previous: ${formTitles[page - 1]}` : "Previous"}
        </button> */}
        {page !== 4 && (
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage((currPage) => currPage - 1)}
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {page > 0 ? `Previous: ${formTitles[page - 1]}` : "Previous"}
          </button>
        )}

        {/* <button
          type="button"
          disabled={page === formTitles.length - 1}
          onClick={handleNext}
          className="rounded-md bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
        >
          {page === 3
            ? "Place Order"
            : page < formTitles.length - 1
              ? `Next: ${formTitles[page + 1]}`
              : "Next"}
        </button> */}
        <button
          type="button"
          onClick={page === 4 ? handleContinueShopping : handleNext}
          className="rounded-md bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
        >
          {page === 3
            ? "Place Order"
            : page === 4
              ? "Continue Shopping"
              : `Next: ${formTitles[page + 1]}`}
        </button>
      </div>
    </section>
  );
}

export default Checkout;
