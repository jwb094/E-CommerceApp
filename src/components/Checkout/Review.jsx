
function Review(props) {
  return (
    <section
      data-template="BillingForm"
      data-view="default"
      className="c-shipping-form w-full"
    >
      <div className="container">
        <div className="c-shipping-form |">
          <div class="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 class="block text-xl font-medium text-slate-800">
              Billing Info
            </h4>
            <form class="mt-8 mb-2 w-8/12 max-w-screen-lg ">
              <div class="mb-1 flex flex-col gap-6">
                {/* <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="First Name"
                  />
                </div>
                <div class="w-full">
                  <label
                    htmlFor="lastname"
                    class="block mb-2 text-sm text-slate-600"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Last Name"
                  />
                </div> */}
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
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Address Line 1"
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
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Post Code"
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
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="City"
                  />
                </div>
                             <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Country"
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

export default Review;
