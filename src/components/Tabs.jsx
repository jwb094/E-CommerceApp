import React, { useState } from "react";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  };

  const headers =["Tab header 1","Tab header 2","Tab header 3","Tab Header 4","Tab Header 5"]
  return (
    <section data-template="Tabs" data-view="default" className="c-tabs">
      <div className="container">
        <div className="c-tabs flex flex-col md:flex-row justify-center">
          <div className="c-tabs__head | flex flex-col">
            <div className="w-full">
              <div className="relative right-0">
                <ul
                  className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
                  data-tabs="tabs"
                  role="list"
                >
                    {headers.map((header,index)=>
                        <li class="z-30 flex-auto text-center | w-full">
                    <a
                    className={ toggleState === index ? "bg-cyan-300 z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 "  
                        : "z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit" }
                    //   className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected={ toggleState === index ? true : false}
                      onClick={() => ToggleTab(index)}
                    >
                      {header}
                    </a>
                  </li>
                    )}

                  {/* <li class="z-30 flex-auto text-center">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="true"
                      onClick={() => ToggleTab(1)}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li class="z-30 flex-auto text-center">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="false"
                      onClick={() => ToggleTab(2)}
                    >
                      Profile
                    </a>
                  </li>
                  <li class="z-30 flex-auto text-center">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="false"
                      onClick={() => ToggleTab(3)}
                    >
                      Settings
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="c-tabs__body">
            
               {headers.map((header,index)=>
                <div className={ toggleState === index ? "tabs__content block p-6" : " hidden"}>
              <h2 className="tabs_title">{index + 1} Tab Title</h2>
              <p className="tabs__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                vitae expedita mollitia eveniet velit t.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                At corrupti quisquam quo magni commodi? Aperiam iste eligendi sint aspernatur,
                 sapiente eaque, error ea accusamus, amet voluptatum placeat quaerat nemo dicta?
                {index+1} 
              </p>
            </div>
            )}

            {/* <div className={ toggleState === 1 ? "tabs__content block bg-cyan-500" : " hidden"}>
              <h2 className="tabs_title">1st Tab Title</h2>
              <p className="tabs__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                vitae expedita mollitia eveniet velit t.
              </p>
            </div>
            <div className={ toggleState === 2 ? "tabs__content block bg-cyan-500" : " hidden"}>
              <h2 className="tabs_title">2st Tab Title</h2>
              <p className="tabs__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                vitae expedita mollitia eveniet velit t.
              </p>
            </div>
                <div className={ toggleState === 3 ? "tabs__content block bg-cyan-500" : " hidden"}>
              <h2 className="tabs_title">3st Tab Title</h2>
              <p className="tabs__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                vitae expedita mollitia eveniet velit t.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
