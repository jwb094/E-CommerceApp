import React, { useState } from 'react';
import { HambugerIcon, WishlistIconFill } from '../../assets/Icons';
import { useWishlistContext } from '../../context/WishlistContext';
import { Link } from "react-router";
function Header(props) {
      const [isOpen, setIsOpen] = useState(false);
    const { state } = useWishlistContext();
    const wishlistCount = state.wishlist.length;
    return (
    <>
      <header>
        <nav className="bg-stone-200 shadow-md px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <div className="font-bold text-xl">
              <Link to="/">BrightBuy</Link>
                 {/* <a href="/">BrightBuy</a> */}
                {/* <Link to="/">Job Seekers</Link> */}
          
            </div>

            {/* Toggle */}
            <button
              className="md:hidden text-2xl"
            //  onClick={() => setIsOpen(!isOpen)}
            >
             <HambugerIcon width={24} height={24}/> 
            </button>

            {/* Menu */}
            <div
              className={`flex-col md:flex md:flex-row md:items-center gap-4 absolute md:static top-14 left-0 w-full md:w-auto h-full bg-gray-400 md:bg-transparent z-10 ${isOpen ? "flex" : "hidden md:flex"}`}
            >
              <ul
                className={`flex flex-col md:flex-row md:gap-6 px-6 py-4 gap-y-6  ${isOpen ? "border-t-2 " : ""}`}
              >
                <li className="text-lg">
                        <Link to="/">About</Link>
                  {/* <a href="/about">About</a> */}
                  {/* <Link to="/about">About</Link> */}
                </li>
                <li className="text-lg">
                  <Link to="/search">Search</Link>
                  {/* <a href="/search">Search</a> */}
                  {/* <Link to="/search">Search</Link> */}
                </li>
                <li className="text-lg">
                  <Link to="/contact-us">Contact</Link>
                  {/* <a href="/contact-us">Contact</a> */}
                  {/* <Link to="/contact-us">Contact</Link> */}
                </li>
              </ul>
            </div>
            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} ${wishlistCount === 1 ? "product" : "products"}`}
              className="relative inline-flex items-center gap-1 text-slate-800 hover:text-rose-600"
            >
              <WishlistIconFill width={26} height={26} />
              <span className="min-w-5 rounded-full bg-rose-600 px-1.5 py-0.5 text-center text-xs font-semibold leading-4 text-white">
                {wishlistCount}
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
    );
}

export default Header;