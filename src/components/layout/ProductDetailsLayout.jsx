import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
function ProductDetailsLayout(props) {
    return (
    <HelmetProvider>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </HelmetProvider>
    );
}

export default ProductDetailsLayout;