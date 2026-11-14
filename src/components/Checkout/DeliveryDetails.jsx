import React from "react";

function ShippingForm({ orderData, setOrderData,formRef }) {
  return (
    <section
      data-template="ShippingForm"
      data-view="default"
      className="c-shipping-form w-full"
    >
      <div className="container">
        <div className="c-shipping-form__new_Address |">
          <div class="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 class="block text-xl font-medium text-slate-800">
              Shipping Info
            </h4>
            <form ref={formRef} class="mt-8 mb-2 w-8/12 max-w-screen-lg ">
              <div class="mb-1 flex flex-col gap-6">
                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="address_line_1"
                  >
                    Address Line 1
                  </label>
                  <input
                    id="address_line_1"
                    type="text"
                    required
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="House number and street name"
                 c
                    onChange={(event) =>
                      setOrderData({
                        ...orderData,
                        delivery: {
                          ...orderData.delivery,
                          addressLine1: event.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="address_line_2"
                  >
                    Address Line 2
                  </label>
                  <input
                    id="address_line_2"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Address Line 2"
                    value={orderData.delivery.addressLine2}
                    onChange={(event) =>
                      setOrderData({
                        ...orderData,
                        delivery: {
                          ...orderData.delivery,
                          addressLine2: event.target.value,
                        },
                      })
                    }
                  />
                </div>

                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="post_code"
                  >
                    Post Code:
                  </label>
                  <input
                    id="post_code"
                    type="text"
                    required
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Post Code"
                    value={orderData.delivery.postCode}
                    onChange={(event) =>
                      setOrderData({
                        ...orderData,
                        delivery: {
                          ...orderData.delivery,
                          postCode: event.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="City"
                    value={orderData.delivery.city}
                    onChange={(event) =>
                      setOrderData({
                        ...orderData,
                        delivery: {
                          ...orderData.delivery,
                          city: event.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingForm;
