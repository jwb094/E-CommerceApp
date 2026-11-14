function PaymentForm({ orderData, setOrderData,formRef }) {
  return (
    <section
      data-template="paymentForm"
      data-view="default"
      className="c-payement-form "
    >
      <div className="container">
        <div className="relative flex w-full max-w-[24rem] flex-col rounded-lg bg-white border border-slate-200 shadow-sm">
          <div className="p-6">
            <div className="block overflow-visible">
              <div className="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
                <div role="tabpanel" data-value="card">
                  <form ref={formRef} className="mt-8 flex flex-col">
                    <div className="flex gap-10">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center cursor-pointer"
                          htmlFor="html"
                        >
                          <input
                            name="payment_method"
                            type="radio"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                            id="html"
                            checked={
                              orderData.payment.method === "credit-debit-card"
                            }
                            value="credit-debit-card"
                            onChange={(event) =>
                              setOrderData((previousData) => ({
                                ...previousData,
                                payment: {
                                  ...previousData.payment,
                                  method: event.target.value,
                                },
                              }))
                            }
                          />
                          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                        </label>
                        <label
                          className="ml-2 text-slate-600 cursor-pointer text-sm"
                          htmlFor="html"
                        >
                          Credit / Debit Card
                        </label>
                      </div>

                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center cursor-pointer"
                          htmlFor="paypal"
                        >
                          <input
                            name="payment_method"
                            type="radio"
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                            id="paypal"
                            checked={orderData.payment.method === "paypal"}
                            value="paypal"
                               onChange={(event) =>
                              setOrderData((previousData) => ({
                                ...previousData,
                                payment: {
                                  ...previousData.payment,
                                  method: event.target.value,
                                },
                              }))
                            }
                          />
                          <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                        </label>
                        <label
                          className="ml-2 text-slate-600 cursor-pointer text-sm"
                          htmlFor="paypal"
                        >
                          PayPal
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentForm;
