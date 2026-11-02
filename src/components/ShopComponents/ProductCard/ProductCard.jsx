import React from "react";
import { StarIcon, Wishlist } from "../../../assets/Icons";
import Button from "../../Button";
function ProductCard(props) {

  //logic - add product to Wishlist 
  //logic - add Product to Cart
  // logic add href to Product details page
  const roundedRating = Math.round(props.data.rating);

  const rating = [];
  for (let index = 0; index < roundedRating; index++) {
    rating.push(<StarIcon key={index} width={12} height={12} />);
  }

  return (
    <section
      data-template="ProductCard"
      data-view="card"
      className="c=product-card"
    >
      {/* <div className="conatiner"> */}
        <div className="c-productCard-bloc | my-0 mx-auto bg-white rounded-2xl shadow-2xl md:space-y-0 md:space-x1-10 
        md:mx-auto md:my-0 md:p-8 w-10/12 md:min-w-72 md:h-11/12"
        > 
          <div className="c-productCard-bloc-Content | flex flex-col ">
            <div className="c-productCard-bloc-Content-Media p-6 md:p-0">
              <div className="bg-cyan-200 rounded-lg p-4">
                <img
                  className="w-62.5 max-h-48 object-contain"
                  src={props.data.media.thumbnail}
                  alt="product title"
                />
              </div>
            </div>

            <div className="Content px-6 md:py-0 md:px-0 flex flex-col gap-y-2 md:mt-4">
              {/* <div className=" flex gap-x-1">
                <p className="bg-black rounded-full text-white text-sm py-1 px-3">
                  Best Seller
                </p>
                <p className="bg-black rounded-full text-white text-sm py-1 px-3">
                  Top 5 in X Cat
                </p>
              </div> */}

              <div className="c-productCard-bloc-Content-Product">
                <h5 className="max-s-sm text-1xl  font-bold ">
                  {props.data.name}
                </h5>
                <p className="text-1xl">£{props.data.price}</p>
              </div>
              <div className="rating | flex flex-row gap-x-1 items-center">
                <small className="flex flex-row items-center">

                  {rating}&nbsp;&nbsp;({props.data.review_count})
                </small>
                <div>
                  <button>
                    <Wishlist width={24} height={24} />
                  </button>
                </div>
              </div>
              <div className="buttons flex flex-row justify-between mb-6">
                {/* OnClick - UseReducer Add To Cart */}
                <Button title={"Add To Cart"}></Button>
                <a
                  href={`/product/${props.data.id}/${props.data.slug}`}
                  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default ProductCard;
