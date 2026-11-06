import React from "react";
import { useParams } from "react-router";

import {StarIcon, WishlistIcon} from "../../src/assets/Icons";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import ProductGallery from "../components/ProductDetails/ProductGallery";
import Accordion from "../components/Accordion";
import PageNotFound from "./PageNotFound";
import {
  getProductById,
  getProductRelatedItems,
  getProductReviews,
} from "../utils/functions";

const placeholderImage = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"><rect width="100%" height="100%" fill="#e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#475569" font-family="sans-serif" font-size="16">No image available</text></svg>',
)}`;

function ProductDetails(props) {
  let breadcrumbs,productsImages = [];
  const { product_id } = useParams();

  // Load the product identified by the route parameter.
  const product = getProductById(product_id);

  if (!product) {
    return <PageNotFound />;
  }
  if (product.media?.gallery && product.media.gallery.length > 0) {
     productsImages = product.media?.gallery.map((image) => image);
  }

  const reviews = getProductReviews(product_id);

    const roundedRating = Math.round(product.rating);
  
    const rating = [];
    for (let index = 0; index < roundedRating; index++) {
      rating.push(<StarIcon key={index} width={18} height={18} />);
    }

  // Use the product name as the final breadcrumb.
  if (product) {
    breadcrumbs = [product.name];
  }
  // Find products from the same category for the recommendations section.
  const relatedProducts = getProductRelatedItems(product.category_id);

  return (
    <>
      <div className="mx-auto lg:w-7xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="container">
          <section className="category_details | mb-5">
            <Breadcrumbs utilityClass="py-0" items={breadcrumbs} />
          </section>

          <div className="product_details | grid grid-cols-1 xl:grid-cols-2 gap-4 | mb-5">
            <div className="product-details__gallery | mb-5">
              <ProductGallery productsGallery={productsImages} />
            </div>
            <div className="product_details__content | mb-5">
              <ul className="product_details__content__list | flex flex-col gap-y-6 | mb-5">
                <li className="">
                  <h1 className="text-4xl">{product.name}</h1>
                </li>
                <li className="flex flex-row">{rating}</li>
                <li>
                  <p className="text-2xl font-bold">£{product.price.toFixed(2)}</p>
                </li>
                <li>
                  <p className="text-gray-600">{product.description}</p>
                </li>
                <li className="product_details__content__list__tags | flex flex-col gap-y-2">
                  <p className="text-gray-600">Tags</p>
                  <ul className="product_details__content__list__tags | flex flex-row flex-wrap gap-2"> 
                    {product.tags?.map((tag) => (
                      <li key={tag} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="flex flex-col gap-3 border-t border-slate-200 pt-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="product-quantity" className="text-sm font-medium text-slate-700">
                      Quantity
                    </label>
                    <select
                      id="product-quantity"
                      defaultValue="1"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="button"
                    className="flex-1 rounded-md bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
                  >
                    Add To Basket
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                  >
                    <WishlistIcon width={20} height={20} />
                    Add to Wishlist
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product_reviews | mb-5">
            <p className="text-2xl font-bold mb-4">Product Reviews</p>
            {Array.isArray(reviews) ? (
              <>
              {reviews.map((review, index) => (

              <Accordion title={review.name} review={review} />
              ))}
              </>
            ) : (
              <p className="text-gray-600">{reviews}</p>
            )}

          </div>

          <div className="related_products | mb-5">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <a
                  href={`/product/${product.id}/${product.slug}`}
                  key={product.id}
                  className="related_product_link"
                >
                  <div key={product.id} className="related_product_card">
                    <img
                      src={product.media.thumbnail ?? placeholderImage}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-2"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">£{product.price.toFixed(2)}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
