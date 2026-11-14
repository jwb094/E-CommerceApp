function CustomerInformation({ orderData, setOrderData, formRef }) {
  //Logic here
  /**
   * if user is logged in use User data
   */
  return (
    <section
      data-template="CustomerInformation"
      data-view="default"
      className="c-Customer-Information-form w-full"
    >
      <div className="container">
        <div className="c-Customer-info-form |">
          <div className="relative flex flex-col items-center rounded-xl bg-transparent">
            <form ref={formRef} className="mt-8 mb-2 w-8/12 max-w-screen-lg ">
              <div className="mb-1 flex flex-col gap-6">
                <div className="w-full">
                  <label
                    className="block mb-2 text-sm text-slate-600"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    required
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="First Name"
                    value={orderData.customer.firstName}
                    onChange={(event) =>
                      setOrderData({
                        ...orderData,
                        customer: {
                          ...orderData.customer,
                          firstName: event.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm text-slate-600"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    required
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Last Name"
                    value={orderData.customer.lastName}
                    onChange={(event) =>
                      setOrderData({
                        ...orderData,
                        customer: {
                          ...orderData.customer,
                          lastName: event.target.value,
                        },
                      })
                    }
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-2 text-sm text-slate-600"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Email"
                    value={orderData.customer.email}
                    onChange={(event) =>
                      setOrderData((previousorderData)=>({
                        ...previousorderData,
                        customer: {
                          ...previousorderData.customer,
                          email: event.target.value,
                        },
                      }))
                    }
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block mb-2 text-sm text-slate-600"
                    htmlFor="phone"
                  >
                    Phone:
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="(+44) 987 123 5765"
                    value={orderData.customer.telephone}
                    onChange={(event) =>
                      setOrderData((previousorderData)=>({
                        ...previousorderData,
                        customer: {
                          ...previousorderData.customer,
                          telephone: event.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
              {/* <button
                class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Sign Up
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerInformation;
