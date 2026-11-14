import React, { useState } from "react";
import { BasketIcon, HambugerIcon, WishlistIconFill } from "../../assets/Icons";
import { useWishlistContext } from "../../context/WishlistContext";
import { useBasketContext } from "../../context/BasketContext";
import { Link } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useWishlistContext();
  const wishlistCount = state.wishlist.length;
  const { state: basketState } = useBasketContext();
  const basketCount = basketState.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-header__nav relative h-16 bg-stone-200 px-4 shadow-md">
        <div className="site-header__bar flex h-full items-center justify-between md:justify-start">
          <button
            type="button"
            className="site-header__toggle rounded p-2 text-slate-800 hover:bg-stone-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            <HambugerIcon width={24} height={24} />
          </button>

          <div className="site-header__brand text-xl font-bold">
            <Link to="/" onClick={closeMenu}>
              BrightBuy
            </Link>
          </div>

          <div
            id="primary-navigation"
            className={`site-header__menu absolute left-0 top-full z-20 h-[calc(100dvh-4rem)] w-full flex-col overflow-y-auto border-t border-stone-300 bg-stone-200 shadow-md md:static md:z-auto md:ml-8 md:flex md:h-auto md:w-auto md:flex-row md:items-center md:overflow-visible md:border-0 md:bg-transparent md:shadow-none ${
              isOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <ul className="site-header__links flex flex-col gap-y-4 px-6 py-4 md:flex-row md:gap-6 md:px-0 md:py-0">
              <li className="site-header__item text-lg">
                <Link className="site-header__link" to="/" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="site-header__item text-lg">
                <Link
                  className="site-header__link"
                  to="/categories"
                  onClick={closeMenu}
                >
                  Categories Hub
                </Link>
              </li>
              <li className="site-header__item text-lg">
                <Link
                  className="site-header__link"
                  to="/search"
                  onClick={closeMenu}
                >
                  Search
                </Link>
              </li>
              <li className="site-header__item text-lg">
                <Link
                  className="site-header__link"
                  to="/contact-us"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-header__actions flex items-center gap-4 md:ml-auto">
            <Link
              to="/basket"
              aria-label={`Basket, ${basketCount} ${basketCount === 1 ? "item" : "items"}`}
              className="site-header__action relative inline-flex items-center gap-1 text-slate-800 hover:text-slate-600"
            >
              <BasketIcon width={26} height={26} />
              <span className="site-header__count min-w-5 rounded-full bg-slate-800 px-1.5 py-0.5 text-center text-xs font-semibold leading-4 text-white">
                {basketCount}
              </span>
            </Link>
            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} ${wishlistCount === 1 ? "product" : "products"}`}
              className="site-header__action relative inline-flex items-center gap-1 text-slate-800 hover:text-rose-600"
            >
              <WishlistIconFill width={26} height={26} />
              <span className="site-header__count min-w-5 rounded-full bg-rose-600 px-1.5 py-0.5 text-center text-xs font-semibold leading-4 text-white">
                {wishlistCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;