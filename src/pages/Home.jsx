import React from "react";
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
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 py-24">
          {/* Best Sellers */}
          <BoxGrid data={bestSellers} />

          {/* Sale Products */}
          <BoxGrid data={onSaleProducts}/>
        </div>

      
        {/* Latest */}
        <section>
      <h2 className="text-3xl font-bold"> Latest</h2>
        <div className="flex flex-col md:flex-row md:justify-around | gap-x-6 py-12">
          
          {latestProducts.map((latest)=>(
            <ProductCard data={latest}/>
          ))}
        </div>
        </section>

        {/* Featured Categories  */}
        <div className="flex flex-col md:flex-row | gap-x-6 py-24">
          {featuredCategories.map((featuredCategory) => (
            <Card category={featuredCategory} key={featuredCategory.id} />
          ))}
        </div>

        {/*  Customer Review */}
        {/* <div className="flex flex-col md:flex-row | gap-x-6 py-24">
          Customer Review
        </div> */}
        <section>
          <h2 className="text-3xl font-bold"> Best Rated</h2>
        <div className="flex flex-col md:flex-row md:justify-around | gap-x-6 py-12">
                   
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
