import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CartModal from "./components/Cart/CartModal";
import BillingForm from "./components/Checkout/BillingForm";
import OrderSummary from "./components/Checkout/OrderSummary";
import PaymentForm from "./components/Checkout/PaymentForm";
import ShippingForm from "./components/Checkout/ShippingForm";

import ContactUs from "./components/Contact/ContactUs";
import Newsletter from "./components/Contact/Newsletter";

import ProductGallery from "./components/ProductDetails/ProductGallery";
import RelatedProducts from "./components/ProductDetails/RelatedProducts";
import ReviewCard from "./components/ProductDetails/ReviewCard";

import Filters from "./components/ShopComponents/Filters";
import GridDisplay from "./components/ShopComponents/GridDisplay";
import ListDisplay from "./components/ShopComponents/ListDisplay";
import Pagination from "./components/ShopComponents/Pagination";
import ProductCard from "./components/ShopComponents/ProductCard";
import ProductList from "./components/ShopComponents/ProductList";
import SearchBar from "./components/ShopComponents/SearchBar";
import SortDropdown from "./components/ShopComponents/SortDropdown";

import AddressCard from "./components/User/AddressCard";
import LoginForm from "./components/User/LoginForm";
import OrderCard from "./components/User/OrderCard";
import ProfileCard from "./components/User/ProfileCard";
import RegisterForm from "./components/User/RegisterForm";
import WishlistCard from "./components/User/WishlistCard";

import Tabs from "./components/Tabs";
import PageLoader from "./components/PageLoader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <CartModal></CartModal>

      <BillingForm></BillingForm>
      <OrderSummary></OrderSummary>
      <PaymentForm></PaymentForm>
      <ShippingForm></ShippingForm>
      <ContactUs></ContactUs>
      <Newsletter></Newsletter>
      <ProductGallery></ProductGallery>
      <RelatedProducts></RelatedProducts>
      <ReviewCard></ReviewCard>
      <Filters></Filters>
      <GridDisplay></GridDisplay>
      <ListDisplay></ListDisplay>
      <Pagination></Pagination>
      <ProductCard></ProductCard>
      <ProductList></ProductList>
      <SearchBar></SearchBar>
      <SortDropdown></SortDropdown>
      <AddressCard></AddressCard>
      <LoginForm></LoginForm>
      <OrderCard></OrderCard>
      <ProfileCard></ProfileCard>
      <RegisterForm></RegisterForm>
      <WishlistCard></WishlistCard>
      <PageLoader></PageLoader>
      <Tabs></Tabs>
      <Footer></Footer>
    </>
  );
}

export default App;
