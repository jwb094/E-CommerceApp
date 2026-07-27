import React from "react";

function ContactUs(props) {

  //Logic - States for Forms 
  //logic - functions for handle sumbit , validate form, reset form values
  return (
    <section
      data-template="Form"
      data-view="default"
      className="c-form | px-12 py-12"
    >
      <div className="container">
        <div className="c-contact-us-form |">
          <div class="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 class="block text-xl font-medium text-slate-800">Sign Up</h4>
            <p class="text-slate-500 font-light">
              Nice to meet you! Enter your details to register.
            </p>
            <form class="mt-8 mb-2 w-8/12 max-w-screen-lg ">
              <div class="mb-1 flex flex-col gap-6">
                <div class="w-full">
                  <label class="block mb-2 text-sm text-slate-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Name"
                  />
                </div>
                <div class="w-full">
                  <label class="block mb-2 text-sm text-slate-600">Email</label>
                  <input
                    type="email"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                  />
                </div>

                <div class="w-full ">
                  <label class="block mb-1 text-sm text-slate-800">
                    Your Country
                  </label>

                  <div class="relative">
                    <select class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                      <option value="brazil">Brazil</option>
                      <option value="bucharest">Bucharest</option>
                      <option value="london">London</option>
                      <option value="washington">Washington</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </div>
                </div>

                <div className="sm:w-full">
                  <label
                    for="message"
                    className=" text-sm/6 font-medium text-black"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <button
                class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
