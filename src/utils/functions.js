import { categories } from "../data/Categories";
import { products } from "../data/Products";
import { productReviews } from "../data/ProductReviews";

// Homepage product collections
export const getFeaturedProducts = function () {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  return featuredProducts;
};

// Return sale products, excluding products already shown as featured.
export const getSalesProducts = function () {
  let featuredProducts = getFeaturedProducts();

  return products
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at) ? 1 : -1;
    })
    .filter(
      (product) =>
        !featuredProducts.some(
          (featuredProduct) => featuredProduct.id === product.id,
        ),
    )
    .filter((product) => product.on_sale)
    .slice(0, 4);
};

// Collect featured and sale products for the best-rated product section.
export const getBestRatedProducts = () => {
  let featuredProducts = getFeaturedProducts();
  let salesProducts = getSalesProducts();
  return products
    .sort((a, b) => {
      a.rating > b.rating;
    })
    .filter(
      (product) =>
        !featuredProducts.some((featured) => featured.id === product.id),
    )
    .filter(
      (product) =>
        !salesProducts.some((sale) => salesProducts.id === product.id),
    )
    .slice(0, 3);
};

// Build the best-seller collection using the other home page collections.
export const getBestSellers = function () {
  let featuredProducts = getFeaturedProducts();
  let bestfeaturedProducts = getBestRatedProducts();
  let salesProducts = getSalesProducts();
  return products
    .filter((product) => product.best_seller)
    .filter(
      (product) =>
        !featuredProducts.some((featured) => featured.id === product.id),
    )
    .filter(
      (product) =>
        !bestfeaturedProducts.some((featured) => featured.id === product.id),
    )
    .filter(
      (product) =>
        !salesProducts.some((sale) => salesProducts.id === product.id),
    )
    .slice(0, 4);
};

// Build the latest-products collection using the other home page collections.
export const getLatestProducts = function () {
  let featuredProducts = getFeaturedProducts();
  let bestfeaturedProducts = getBestRatedProducts();
  let bestSellers = getBestSellers();
  let salesProducts = getSalesProducts();
  return products
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at) ? -1 : 1;
    })
    .filter(
      (product) =>
        !featuredProducts.some(
          (featuredProduct) => featuredProduct.id === product.id,
        ),
    )
    .filter(
      (product) =>
        !bestfeaturedProducts.some(
          (bestfeaturedProduct) => bestfeaturedProduct.id === product.id,
        ),
    )
    .filter(
      (product) =>
        !bestSellers.some((bestSeller) => bestSeller.id === product.id),
    )
    .filter(
      (product) =>
        !salesProducts.some((sale) => salesProducts.id === product.id),
    )
    .slice(0, 3);
};

// Category data and product queries
export const getFeaturedCategories = function () {
  return categories.filter((category) => category.featured).slice(0, 4);
};

export const getCategoryBySlug = (categorySlug) => {
  return categories.find((cat) => cat.slug === categorySlug);
};

// Expose the complete category list for consumers that need every category.
export const getAllCategories = categories;

// Return all products belonging to the category identified by its slug.
export const getCategoryProducts = (categorySlug) => {
  let selectedCat = categories.find((cat) => cat.slug === categorySlug);

  const categoryProductsResults = products.filter(
    (product) => product.category_id === selectedCat.id,
  );

  return categoryProductsResults;
};

// Product detail page lookups
export const getProductById = (product_id) => {
  return products.find((product) => product.id === Number(product_id));
};

// Return a product's reviews, or a message when no review record exists.
export const getProductReviews = (product_id) => {
  const product = productReviews.find(
    (product) => product.product_id === Number(product_id),
  );
  if (product === undefined) {
    return "No Reviews Found";
  }
  return product.reviews;
};

// Prefer same-category products, then fill the collection with other products.
export const getProductRelatedItems = (category_id) => {
  const relatedProducts = products
    .filter((product) => product.category_id === category_id)
    .slice(0, 4);
  const additionalProducts = products
    .filter((product) => product.category_id !== category_id)
    .slice(0, 4 - relatedProducts.length);

  return [...relatedProducts, ...additionalProducts];
};

// Product listing helpers
export const sortProducts = function (data, sort) {
  // Sort a copy so the shared product data is not reordered.
  let sortedData = [...data];

  switch (sort) {
    case "featured":
      sortedData.sort((a, b) => (b.featured === a.featured ? -1 : 1));
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
};
export const filteredProducts = function (data, filters) {
  let filteredData = [...data];

  return filteredData.filter((product) => {
    // An empty filter list means that criterion is not restricting results.
    const matchesPrices =
      filters.prices.length === 0 ||
      filters.prices.some((price) => Number(product.price) >= price);

    const matchRatings =
      filters.ratings.length === 0 ||
      filters.ratings.some((rating) => Number(product.ratings) >= rating);

    const matchSale =
      filters.sale.length === 0 ||
      filteredData.filter((product) => product.on_sale === filters.sale);

    return (matchesPrices, matchSale, matchRatings);
  });
};

// Pagination
export const contentPagintion = (page, limit, contentData) => {
  // Keep the requested page within the available page range.
  let totalPages = Math.ceil(contentData.length / limit) || 1;
  let currentPage = Math.min(page, totalPages);

  return { totalPages: totalPages, currentPage: currentPage };
};
