import { StarIcon, Wishlist } from "../../../assets/Icons";
import Button from "../../Button";
import React from "react";

function ProductRectangle(props) {
  let rating = [];
  for (let index = 0; index < 5; index++) {
    rating.push(<StarIcon width={12} height={12} />);
  }
  return (
    <section data-template="ProductCard" data-view="rectangle" className="">
      <div className="conatiner">
        <div
          className="c-productCard-bloc | 
                bg-white rounded-2xl shadow-2xl mx-6 md:space-y-0 md:space-x1-10 md:m-0 md:p-6  md:w-6/12"
        >
          <div className="c-productCard-bloc-Content | flex flex-row md:gap-x-6">
            <div className="c-productCard-bloc-Content-Media p-6 md:p-0">
              <div className="bg-cyan-200 rounded-lg p-4">
                <img
                  className="w-[200px]"
                  src="https://freepngimg.com/thumb/computer_pc/9-2-computer-pc-transparent.png"
                  alt="product title"
                />
              </div>
            </div>

            <div className="Content  py-0 px-0 flex flex-col gap-y-2 ">
              <div className=" flex gap-x-1 hidden md:flex">
                <p className="bg-black rounded-full text-white text-sm py-1 px-3">
                  Best Seller
                </p>
                <p className="bg-black rounded-full text-white text-sm py-1 px-3">
                  Top 5 in X Cat
                </p>
              </div>

              <div className="c-productCard-bloc-Content-Product">
                <h5 className="max-s-sm text-2xl  font-medium ">
                  Product Title
                </h5>
                <p className="text-3xl">£23.99</p>
              </div>
              <div className="rating | flex flex-row gap-x-1 items-center">
                <small className="flex flex-row items-center">
                  {rating} (24)
                </small>
                <div>
                  <button>
                    <Wishlist width={24} height={24} />
                  </button>
                </div>
              </div>
              <div className="buttons flex flex-col gap-6 md:flex-row justify-between">
                {/* OnClick - UseReducer Add To Cart */}
                <Button title={"Add To Cart"}></Button>
                <a
                  href="/product/product_id/product_slug"
                  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductRectangle;
