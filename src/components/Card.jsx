import React from 'react';

function Card({category}) {
    return (
       <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-72 p-6">
                <div class="flex flex-col items-center mb-4 gap-y-6">
                  <h5 class=" text-slate-800 text-xl font-semibold">
                    {category.name}
                  </h5>
                   <p>{category.description}</p> 
                </div>

                <div className="mt-auto">
                  <a
                    href={`/category/${category.slug}`}
                    class="text-slate-800 font-semibold text-sm hover:underline flex items-center"
                  >
                    Browse {category.name} Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
    );
}

export default Card;