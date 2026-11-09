import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
function DefaultLayout(props) {
  return (
    <HelmetProvider>
      <main className="flex min-h-svh flex-1 flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </HelmetProvider>
  );
}

export default DefaultLayout;
