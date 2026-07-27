import React from "react";
import "../../assets/styles/cartpopup.scss";
function CartModal(props) {

      let productsToBeDisplayed = [];

  for (let index = 0; index <= 2; index++) {
    productsToBeDisplayed.push(  <li className="flex flex-row w-full">
                            <img
                  className="w-[150px]"
                  src="https://freepngimg.com/thumb/computer_pc/9-2-computer-pc-transparent.png"
                  alt="product title"
                />  
                <div>

                <p>Product Name</p>
                <p>Qty:1</p>
                <p>£xx.00</p>
                </div>
                </li>

    );
  }

  return (
    <section data-template="CartModal" data-view="default" className="">
      <div className="container">
        <button popoverTarget="cart-popup"  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
          Cart Popup
        </button>
        <div id="cart-popup" className="pop-up-Container | w-96" popover="auto">
            {/* <h1>Lorem, ipsum.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente?</p> */}
            <ul>
                {productsToBeDisplayed}
            </ul>
            <p>Total: £54.00</p>


        </div>
      </div>
    </section>
  );
}

export default CartModal;
