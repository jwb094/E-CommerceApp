import React from "react";
// import { toggleAccordion } from "../utils/accordion";
import "../assets/styles/accordion.scss"
function Accordion(props) {
  return (
    <section data-template="Accordion" data-view="default" className="c-accordion my-12">
      <div className="container">
        <details>
          <summary className=" rounded-2xl px-6 py-6 bg-slate-200">{props.title}</summary>
          <div className="px-6 py-6 ">
              {props.question.map((item,index)=>
             <div className="py-4">
              <b >{item.question}</b>
              <br />
              <p className="mt-2">{item.answer}</p>
              </div>
            )}   
          </div>
        </details>
        
      </div>
    </section>
  );
}

export default Accordion;
