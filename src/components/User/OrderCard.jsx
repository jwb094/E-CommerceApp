import React from "react";

function OrderCard(props) {
      let itemsToBeDisplayed = [];

  for (let index = 0; index <= 2; index++) {
    itemsToBeDisplayed.push(
                <li>
                            <a
                href="#"
                class="rounded-xl text-slate-800 flex w-full items-center p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <img src="https://placehold.co/150x150" alt="" />
                Product Name
              </a>
                </li>);
  }
  return (
    <section
      data-template="OrderCard"
      data-view="default"
      className="c-OrderCard"
    >
      <div className="container">
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 md:w-full">
          <div class="p-4">
            {/* <AddressIcon width={24} height={24}/> */}
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
              Order No #9033i4430120
            </h5>
            <ul className="order-list flex flex-col gap-1 py-1 5">
                {itemsToBeDisplayed}
            </ul>

    
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderCard;
