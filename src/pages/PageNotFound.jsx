import React from "react";
import { Link } from "react-router";

function PageNotFound(props) {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
          <div class="flex flex-col items-center justify-center text-sm max-md:px-4 py-12">
            <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              Error Code: 404 – Page Not Found
            </h1>
            <div class="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
            <p class="md:text-xl text-gray-400 max-w-lg text-center">
              The page you're looking for may have been moved, deleted or the
              web address may have been entered incorrectly. Don't worry—there
              are plenty of great products waiting to be discovered.
            </p>
            <Link
              href="/"
              class="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-5 font-medium active:scale-95 transition-all"
            >
              Back to Home
              <svg
                class="group-hover:translate-x-0.5 transition"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
                  stroke="#1E1E1E"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            {/* Catgories */}
            <Link
              href="/categories"
              class="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-5 font-medium active:scale-95 transition-all"
            >
              Browse our Shop
              <svg
                class="group-hover:translate-x-0.5 transition"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
                  stroke="#1E1E1E"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            {/* Search */}
            <Link
              href="/search"
              class="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-5 font-medium active:scale-95 transition-all"
            >
              Search for your favourite products
              <svg
                class="group-hover:translate-x-0.5 transition"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
                  stroke="#1E1E1E"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <p className="mt-12">
              If you believe you've reached this page in error, please contact
              our customer support team and we'll be happy to help.
            </p>
            <p>Thank you for visiting BrightBuy.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
