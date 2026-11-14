import React from "react";
import { Link } from "react-router";
import BoxGrid from "../components/ShopComponents/BoxGrid/BoxGrid";
import Newsletter from "../components/Contact/Newsletter";
import Banner from "../components/Banner";
import ProductCard from "../components/ShopComponents/ProductCard/ProductCard"
import {
  getFeaturedProducts,//
  getBestRatedProducts,
  getBestSellers,//
  getLatestProducts,//
  getSalesProducts,
  getFeaturedCategories,
} from "../utils/functions";
import Card from "../components/Card";
function Home(props) {
  const featuredProducts = getFeaturedProducts();
  const bestRatedProducts = getBestRatedProducts();
  const bestSellers = getBestSellers();
  const onSaleProducts = getSalesProducts();
  const latestProducts = getLatestProducts();
  const featuredCategories = getFeaturedCategories();
  // console.log(featuredProducts);
  // console.log(onSaleProducts);
  //   console.log(bestRatedProducts);
  // console.log(bestSellers);
  // console.log(latestProducts);
  // console.log(featuredCategories);
  return (
    <>
      <Banner />
      <div className="mx-auto lg:w-7xl px-4 py-16 sm:px-6 lg:px-0">
        {/* <div className="container"> */}
        <div className="flex flex-col gap-y-8 py-24 md:flex-row md:justify-between md:gap-4">
          {/* Best Sellers */}
          <BoxGrid data={bestSellers} />

          {/* Sale Products */}
          <BoxGrid data={onSaleProducts}/>
        </div>

      
        {/* Latest */}
        <section>
      <h2 className="text-3xl font-bold"> Latest</h2>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
          
          {latestProducts.map((latest)=>(
            <ProductCard data={latest}/>
          ))}
        </div>
        </section>

        {/* Featured Categories  */}
        <section className="featured-categories py-24">
          <h2 className="featured-categories__title mb-8 text-3xl font-bold">
            <Link
              to="/categories"
              className="transition-colors hover:text-slate-600"
            >
              Featured Categories
            </Link>
          </h2>
          <div className="category-cards grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((featuredCategory) => (
              <Card category={featuredCategory} key={featuredCategory.id} />
            ))}
          </div>
        </section>

        {/*  Customer Review */}
        {/* <div className="flex flex-col md:flex-row | gap-x-6 py-24">
          Customer Review
        </div> */}
        <section>
          <h2 className="text-3xl font-bold"> Best Rated</h2>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
                   
          {bestRatedProducts.map((bestRatedProduct)=>(
            <ProductCard data={bestRatedProduct}/>
          ))}
        </div>
          </section>
        {/* Newsletter  */}
        <Newsletter />
        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
