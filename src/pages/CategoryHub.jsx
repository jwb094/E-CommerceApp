import React from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { getAllCategories } from "../utils/functions";
import Card from "../components/Card";
function CategoryHub(props) {
  let breadcrumbs = ["Category Hub"];

  return (
    <>
      <div className="mx-auto lg:w-7xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="container">
          <section className="category_details">
            <Breadcrumbs items={breadcrumbs} />

            {/* <h1 className="">Category Hub</h1> */}
          </section>
          <div className="flex flex-col md:flex-row flex-wrap justify-evenly">
            {getAllCategories.map((category) => (
              <Card category={category} key={category.id}/>
              // <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-72 p-6">
              //   <div class="flex flex-col items-center mb-4 gap-y-6">
              //     <h5 class=" text-slate-800 text-xl font-semibold">
              //       {category.name}
              //     </h5>
              //      <p>{category.description}</p> 
              //   </div>

              //   <div className="mt-auto">
              //     <a
              //       href={`/category/${category.slug}`}
              //       class="text-slate-800 font-semibold text-sm hover:underline flex items-center"
              //     >
              //       Browse {category.name} Products
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         class="ml-2 h-4 w-4"
              //         fill="none"
              //         viewBox="0 0 24 24"
              //         stroke="currentColor"
              //       >
              //         <path
              //           stroke-linecap="round"
              //           stroke-linejoin="round"
              //           stroke-width="2"
              //           d="M14 5l7 7m0 0l-7 7m7-7H3"
              //         />
              //       </svg>
              //     </a>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryHub;
