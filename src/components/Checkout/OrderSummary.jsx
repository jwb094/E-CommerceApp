import React from "react";

function OrderSummary(props) {
  return (
    <section
      data-template="Order-Summary"
      data-view="default"
      className="c-Order-Summary"
    >
      <div className="container">
        <div className="c-Order-summary-form | ">
          <div class="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 class="block text-xl font-medium text-slate-800">
              Your Order Summary
            </h4>

            <div
              class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border
            max-w-screen-lg "
            >
              <table
                id="orderTable"
                class="w-full text-left table-auto min-w-max"
              >
                <thead>
                  <tr>
                    <th class="p-4 border-b border-slate-300 bg-slate-50">
                      <p class="block text-sm font-normal leading-none text-slate-500">
                        Product Name
                      </p>
                    </th>
                    <th class="p-4 border-b border-slate-300 bg-slate-50">
                      <p class="block text-sm font-normal leading-none text-slate-500">
                        Qty
                      </p>
                    </th>
                    <th class="p-4 border-b border-slate-300 bg-slate-50">
                      <p class="block text-sm font-normal leading-none text-slate-500">
                        Price
                      </p>
                    </th>
                    <th class="p-4 border-b border-slate-300 bg-slate-50">
                      <p class="block text-sm font-normal leading-none text-slate-500">
                        Total
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-slate-50">
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">Wooden Chair</p>
                    </td>
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">2</p>
                    </td>
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">$85.00</p>
                    </td>
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">$170.00</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              class="mt-12 relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border
            max-w-screen-lg "
            >
              <table
                id="orderTable"
                class="w-full text-left table-auto min-w-max"
              >
                <thead>
                  <tr>
                    <th class="p-4 border-b border-slate-300 bg-slate-50">
                      <p class="block text-sm font-normal leading-none text-slate-500">
                        Order Total Cost 
                      </p>
                    </th>
                    <th class="p-4 border-b border-slate-300 bg-slate-50">
                      <p class="block text-sm font-normal leading-none text-slate-500">
                       
                      </p>
                    </th>
             
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-slate-50">
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">Total</p>
                    </td>

                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">$170.00</p>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">Delivery</p>
                    </td>

                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">$170.00</p>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">Coupons</p>
                    </td>

                    <td class="p-4 border-b border-slate-200">
                      <p class="block text-sm text-slate-800">$170.00</p>
                    </td>
                  </tr>
                </tbody>
                 <tfoot>
                  <tr>
                    <td
                    
                      class="p-4 text-left font-bold text-slate-800 border-t border-slate-300"
                    >
                      Order Total:
                    </td>
               
                    <td
                      colspan="1"
                      class="p-4 font-semibold text-slate-800 border-t border-slate-300"
                    >
                      $605.00
                    </td>
                  </tr>
                </tfoot> 
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
