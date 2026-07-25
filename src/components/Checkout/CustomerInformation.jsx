import React from "react";

function CustomerInformation(props) {

    //Logic here 
    /**
     * if user is logged in use User data
     */
  return (
    <section
      data-template="CustomerInformation"
      data-view="default"
      className="c-Customer-Information-form"
    >
         <div className="container">
        <div className="c-Customer-info-form |">
          <div class="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 class="block text-xl font-medium text-slate-800">
              Customer Information Info
            </h4>
            <form class="mt-8 mb-2 w-8/12 max-w-screen-lg ">
              <div class="mb-1 flex flex-col gap-6">
                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="First Name"
                  />
                </div>
                <div class="w-full">
                  <label
                    htmlFor="last_name"
                    class="block mb-2 text-sm text-slate-600"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Last Name"
                  />
                </div>

                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Email"
                  />
                </div>

                <div class="w-full">
                  <label
                    class="block mb-2 text-sm text-slate-600"
                    htmlFor="phone"
                  >
                    Phone:
                  </label>
                  <input
                    id="phone"
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="(+44) 987 123 5765"
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
