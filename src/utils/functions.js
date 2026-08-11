import { categories } from "../data/Categories";
import {products} from "../data/Products";


//home Page

//Get Featured Products
export const getFeaturedProducts = function() {
  const featuredProducts = 
   products
   .filter((product) => product.featured)
  .slice(0, 3);
  
  return featuredProducts;
}

// export const getFeaturedProducts =  featuredProducts = 
//    products
//    .filter((product) => product.featured)
//   .slice(0, 3);
  
//Featured  Categories
export const getSalesProducts = function() {
  let featuredProducts = getFeaturedProducts();
  // let bestfeaturedProducts = getBestRatedProducts();
  // let bestSellers = getBestSellers();
  // let latestProducts = getLatestProducts()

  return products
    .sort((a,b)=>{
    return new Date(b.created_at) -  new Date(a.created_at) ? 1 : -1
  })
  .filter((product)=> !featuredProducts.some((featuredProduct) => featuredProduct.id === product.id))
  // .filter((product)=> !bestfeaturedProducts.some((bestfeaturedProduct) => bestfeaturedProduct.id === product.id))
  // .filter((product) => !bestSellers.some((bestSeller) => bestSeller.id === product.id))
  // .filter((product) => !latestProducts.some((latestProduct) => latestProduct.id === product.id))
  .filter((product) => product.on_sale)
  .slice(0, 4)
}

//Get Best Rated 
export const getBestRatedProducts = () =>{
  let featuredProducts = getFeaturedProducts();
  let salesProducts = getSalesProducts();
  return products.sort((a,b)=>{
      a.rating > b.rating
  })
  .filter((product)=> !featuredProducts.some((featured) => featured.id === product.id))
  .filter((product)=> !salesProducts.some((sale) => salesProducts.id === product.id))
  .slice(0,3)
 

}

//Get Best Sellers
export const getBestSellers = function() {

  let featuredProducts = getFeaturedProducts();
  let bestfeaturedProducts = getBestRatedProducts();
  let salesProducts = getSalesProducts();
  return products
  .filter((product) => product.best_seller)
  .filter((product)=> !featuredProducts.some((featured) => featured.id === product.id))
  .filter((product)=> !bestfeaturedProducts.some((featured) => featured.id === product.id))
   .filter((product)=> !salesProducts.some((sale) => salesProducts.id === product.id))
  .slice(0, 4)
}

//Get Latest Products
export const getLatestProducts = function() {

  let featuredProducts = getFeaturedProducts();
  let bestfeaturedProducts = getBestRatedProducts();
  let bestSellers = getBestSellers();
  let salesProducts = getSalesProducts();
  return products
  .sort((a,b)=>{
    return new Date(b.created_at) -  new Date(a.created_at) ? -1 : 1
  })
  .filter((product)=> !featuredProducts.some((featuredProduct) => featuredProduct.id === product.id))
  .filter((product)=> !bestfeaturedProducts.some((bestfeaturedProduct) => bestfeaturedProduct.id === product.id))
  .filter((product) => !bestSellers.some((bestSeller) => bestSeller.id === product.id))
   .filter((product)=> !salesProducts.some((sale) => salesProducts.id === product.id))
  .slice(0, 3)
}




//Featured  Categories
export const getFeaturedCategories = function() {
  return categories.
  filter((category) => category.featured)
  .slice(0, 4)
}


export const getCategoryBySlug = (categorySlug) => {
  return categories.find((cat) => cat.slug === categorySlug);
};


export const getAllCategories = categories;

//Product Page - Get Product by Id
export const getProductById =(product_id)=>{
  return products.find((product) => product.id === Number(product_id))
}

//Product Page - Get Related Products
export const getProductRelatedItems = () =>{

}

//export const getProducts;


//Get Products by Category_id

// export const getAllCategoryProducts =(categorySlug)=>{

// }

export const getCategoryProducts = (categorySlug) => {
let selectedCat = categories.find((cat) => cat.slug === categorySlug);

const categoryProductsResults = products.filter((product) => product.category_id === selectedCat.id);

return categoryProductsResults;
}

// Pagination / Sort / Filter Logic

export const sortProducts = function (data, sort) {
  let sortedData = [...data];

 switch (sort) {
    case "featured":
      sortedData.sort((a, b) =>
        b.featured === a.featured ? -1 : 1,
      );
      break;
    case "oldest":
      sortedData.sort((a, b) =>
        new Date(b.created_at) - new Date(a.created_at) ? 1 : -1,
      );
      break;

    case "newest":
      sortedData.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at),
      );
      break;

    case "az":
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "za":
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return sortedData;
}
export const filteredProducts = function(data,filters){
  let filteredData = [...data];

    return filteredData.filter((product) => {
      //Matches prices
      const matchesPrices =
        filters.prices.length === 0 ||
        filters.prices.some(
        (price) => Number(product.price) >= price,
      ); 


      //Get Rating

      const matchRatings = 
        filters.ratings.length === 0 ||
        filters.ratings.some((rating)=>
        Number(product.ratings) >= rating);

      //If On Sale
       const matchSale = 
        filters.sale.length === 0 ||
        filteredData.filter((product) => product.on_sale === filters.sale)


        return (
          matchesPrices,
          matchSale,
          matchRatings
        );
    })
} 



export const contentPagintion = (page,limit,contentData) =>{
    
  let totalPages = Math.ceil(contentData.length / limit) || 1;
  let currentPage = Math.min(page, totalPages);

  return { totalPages: totalPages, currentPage: currentPage };
}