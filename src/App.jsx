import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CartModal from "./components/Cart/CartModal";
import BillingForm from "./components/Checkout/BillingForm";
import OrderSummary from "./components/Checkout/OrderSummary";
import PaymentForm from "./components/Checkout/PaymentForm";
import ShippingForm from "./components/Checkout/ShippingForm";
import CustomerInformation from "./components/Checkout/CustomerInformation";
import Breadcrumbs from "./components/layout/Breadcrumbs";
import ContactUs from "./components/Contact/ContactUs";
import Newsletter from "./components/Contact/Newsletter";
import Accordion from "./components/Accordion";
import ProductGallery from "./components/ProductDetails/ProductGallery";
import RelatedProducts from "./components/ProductDetails/RelatedProducts";
import ReviewCard from "./components/ProductDetails/ReviewCard";

import Filters from "./components/ShopComponents/Filters";
import GridDisplay from "./components/ShopComponents/GridDisplay";
import ListDisplay from "./components/ShopComponents/ListDisplay";
import Pagination from "./components/ShopComponents/Pagination";
import ProductCard from "./components/ShopComponents/ProductCard/ProductCard";
import SearchBar from "./components/ShopComponents/SearchBar";
import SortDropdown from "./components/ShopComponents/SortDropdown";
import ProductRectangle from "./components/ShopComponents/ProductCard/ProductRectangle";

import AddressCard from "./components/User/AddressCard";
import LoginForm from "./components/User/LoginForm";
import OrderCard from "./components/User/OrderCard";
import ProfileCard from "./components/User/ProfileCard";
import RegisterForm from "./components/User/RegisterForm";
import WishlistCard from "./components/User/WishlistCard";

import Tabs from "./components/Tabs";
import ListViewButton from "./components/ListViewButton";
import PageLoader from "./components/PageLoader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <h1 className="py-12">Breadcrumbs</h1>
      <Breadcrumbs></Breadcrumbs>
   <h1 className="py-12">CartModal</h1>
      <CartModal></CartModal>
      <h1 className="py-12">BillingForm</h1>
      <BillingForm></BillingForm>
      <h1 className="py-12">OrderSummary</h1>
      <OrderSummary></OrderSummary>
      <h1 className="py-12">CustomerInformation</h1>
      <CustomerInformation></CustomerInformation>
      <h1 className="py-12">PaymentForm</h1>
      <PaymentForm></PaymentForm>
      <h1 className="py-12">ShippingForm</h1>
      <ShippingForm></ShippingForm>
      <h1 className="py-12">ContactUs</h1>
      <ContactUs></ContactUs>
      <h1 className="py-12">Newsletter</h1>
      <Newsletter></Newsletter>

      <h1 className="py-12">Accordion</h1>
      <Accordion></Accordion>
      <ProductGallery></ProductGallery>
      <h1 className="py-12">RelatedProducts</h1>
      <RelatedProducts></RelatedProducts>
      <h1 className="py-12">ReviewCard</h1>
      <ReviewCard></ReviewCard>
      <h1 className="py-12">Filters</h1>
      <Filters></Filters>
      <h1 className="py-12">GridDisplay</h1>
      <GridDisplay></GridDisplay>
      <h1 className="py-12">ListDisplay</h1>
      <ListDisplay></ListDisplay>
      <h1 className="py-12">Pagination</h1>
      <Pagination></Pagination>
      <h1 className="py-12">ProductCard</h1>
      <ProductCard></ProductCard>
      <h1 className="py-12">ProductRectangle</h1>
      <ProductRectangle></ProductRectangle>
      <h1 className="py-12">SearchBar</h1>
      <SearchBar></SearchBar>
      <h1 className="py-12">SortDropdown</h1>
      <SortDropdown></SortDropdown>
      <h1 className="py-12">ListViewButton</h1>
      <ListViewButton></ListViewButton>
      <h1 className="py-12">AddressCard</h1>
      <AddressCard></AddressCard>
      <h1 className="py-12">LoginForm</h1>
      <LoginForm></LoginForm>
      <h1 className="py-12">OrderCard</h1>
      <OrderCard></OrderCard>
      <h1 className="py-12">ProfileCard</h1>
      <ProfileCard></ProfileCard>
      <h1 className="py-12">RegisterForm</h1>
      <RegisterForm></RegisterForm>
      <h1 className="py-12">WishlistCard</h1>
      <WishlistCard></WishlistCard>
      <h1 className="py-12">PageLoader</h1>
      <PageLoader></PageLoader>

      <h1 className="py-12">Tabs</h1>
      <Tabs></Tabs>
      <Footer></Footer>
    </>
  );
}

export default App;
