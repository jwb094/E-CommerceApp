import React from "react";
import { ThumbsUpIcon,ThumbsDownIcon } from "../../assets/Icons";

function ReviewCard(props) {

  //Logic Onclick for thumbsup / thumbsdown - update the count for up /down for review
  return (
    <section data-template="reviewCard" data-view="default" className="c-reviewCard">
      <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div class="p-4">
            <p>By First Name</p>
          <h4 class="mb-2 text-slate-800 text-xl font-semibold">
            Worth every penny and more.
          </h4>
          <p class="text-slate-600 leading-normal font-light">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tenetur adipisci eaque natus porro libero dignissimos sit illo laboriosam dolorem.
          </p>
    <button 
        class="rounded-md bg-slate-100 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
                <ThumbsUpIcon width={24} height={24}/>
            </button>
                <button 
        class="rounded-md bg-slate-100 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
                <ThumbsDownIcon width={24} height={24}/>
            </button>
          {/* <button
            class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default ReviewCard;
