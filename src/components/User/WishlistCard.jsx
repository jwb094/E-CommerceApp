import React from "react";

function WishlistCard(props) {
  return (
    <section
    data-template="WishlistCard"
        data-view="default"
            className="c-wishlist-card">
      <div class="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
        <nav class="flex min-w-[240px] flex-col gap-1 py-1.5">
          <a
            href="#"
            class="rounded-xl text-slate-800 flex w-full items-center p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <img src="https://placehold.co/150x150" alt="" />
            Product Name
          </a>
     
        </nav>
      </div>
    </section>
  );
}

export default WishlistCard;
