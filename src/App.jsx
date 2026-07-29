import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import CategoryHub from "./pages/CategoryHub";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile/:user" element={<Profile />} />
          <Route path="/search" element={<Shop />} />
          <Route path="/category:cat_slug" element={<Category />} />
          <Route path="/categories" element={<CategoryHub />} />
          <Route path="/product/:product_id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
