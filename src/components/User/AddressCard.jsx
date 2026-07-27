import React from "react";
import { AddressIcon } from "../../assets/Icons";

function AddressCard(props) {

  //logic - select this address for For Delivery Address - Checkout
  return (
    <section
      data-template="AddressCard"
      data-view="default"
      className="c-addressCard"
    >
      <div className="container">
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div class="p-4">
            <AddressIcon width={24} height={24}/>
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
             First Name - Last Name,
            </h5>
            <p class="text-slate-600 leading-normal font-light">Address Line 1 </p>
    <p class="text-slate-600 leading-normal font-light">Address Line 2 </p>
        <p class="text-slate-600 leading-normal font-light">Post Code</p>
            <p class="text-slate-600 leading-normal font-light">City </p>
            <button
              class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
             Select This Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddressCard;
