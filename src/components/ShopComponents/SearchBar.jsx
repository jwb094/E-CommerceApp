import React from "react";

function SearchBar(props) {
  return (
    <section
      data-template="SearchBar"
      data-view="default"
      className="c-searchbar | py-12"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-12">
        <form action="">
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
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
