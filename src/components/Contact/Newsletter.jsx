import React from "react";

function Newsletter(props) {
  let newsLetterOption = [];
  for (let index = 0; index < 3; index++) {
    // const element = array[index];
    let type = "";
    if(index == 0) {
        type = "Weekly";}
    if(index == 1) {
        type = "ForeNight";}
    if(index == 2) {
        type = "Monthly";}
    newsLetterOption.push(
      <div class="inline-flex items-center">
        <label class="relative flex items-center cursor-pointer" for="html">
          <input
            name="framework"
            type="radio"
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id="html"
          />
          <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="html">
        {type}
        </label>
      </div>,
    );
  }
  return (
    <section
      data-template="Newsletters"
      data-view="default"
      className="c-searchbar | py-12"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-12">
        <form action="" className="flex flex-col gap-y-6">
          {/* First + Last Name */}
          <div className="w-full | md:flex md:flex-row  md:justify-center ">
            <div class="w-full md:w-1/2  px-auto gap-y-6 flex">
              <div className="flex flex-col w-full ">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  class="w-full md:w-11/12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
                  placeholder="Type here..."
                />
              </div>
              <div className="flex flex-col w-full ">
                <label htmlFor="lastName">Last Name</label>
                <input
                  class="w-full md:w-11/12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
                  placeholder="Type here..."
                />
              </div>
            </div>
          </div>
          {/* Newsletter Option +*/}
          <div className="w-full | md:flex md:flex-row  md:justify-center ">
            <div class="flex flex-row justify-between  w-full md:w-1/2  px-auto ">{newsLetterOption}</div>
          </div>
          {/* Email */}
          <div className="w-full | md:flex md:flex-row  md:justify-center">
            <div className="relative flex flex-col md:flex-row mx-6 gap-y-6 justify-center md:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="UI Kits, Dashboards..."
              />

              <button
                type="submit"
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:ml-2"
              >
                Sumbit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
