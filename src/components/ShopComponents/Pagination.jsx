import React from "react";

function Pagination(props) {
  let paginationButtons = [];

  // Show a small window around the current page instead of every page number.
  for (let index = props.page - 2; index <= props.page + 2; index++) {
    if (index > 0 && index <= props.totalPages) {
      paginationButtons.push(
        <button
          className={
            props.page !== index
              ? `rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`
              : `rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-mist-50 hover:text-white hover:bg-slate-800 hover:border-slate-800 text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 bg-slate-700 text-cyan-50`
          }
          onClick={() => props.onPageChange(index)}
          key={`pagaintion-btn-${index}`}
        >
          {index}
        </button>,
      );
    }
  }
  return (
    <section className="c-pagination">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-12">
        <div class="flex md:justify-center space-x-1">
          {/* <button class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            Prev
          </button> */}
          {/* <button class="min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            1
          </button>
          <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            2
          </button>
          <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            3
          </button> */}
          <button
            className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            onClick={() => props.onPageChange(props.page - 1)}
          >
            Prev
          </button>

          {paginationButtons}
          <button
            className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            disabled={props.page === props.totalPages}
            onClick={() => props.onPageChange(props.page + 1)}
          >
            Next
          </button>
          {/* <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            Next
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Pagination;
