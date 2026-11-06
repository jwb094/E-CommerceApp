import React from "react";
// import { toggleAccordion } from "../utils/accordion";
import "../assets/styles/accordion.scss";
function Accordion(props) {

  return (
    <section
      data-template="Accordion"
      data-view="default"
      className="c-accordion my-12"
    >
      <div className="container">
        <details>
          <summary className=" rounded-2xl px-4 py-2 bg-slate-200">
            {props.title}
          </summary>
          <div className="px-6 py-6 ">
            {/** Question Content */}
            {props.question?.length >= 0 &&
              props.question.map((item, index) => (
                <div className="py-4">
                  <b>{item.question}</b>
                  <br />
                  <p className="mt-2">{item.answer}</p>
                </div>
              ))}
            {/** Review Content */}
            {props.review && (
              <>
                <div className="py-4">
                  <b>{props.review.content}</b>
                  <br />
                  <p className="mt-2">{props.review.answer}</p>
                </div>
                <div className="flex flex-row gap-4 flex-wrap justify-between">
                  <ul className="flex flex-col gap-4 flex-wrap">
                    Pros:
                    {props.review.pros?.map((item, index) => (
                      <li key={index} className="py-2">
                         {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-4 flex-wrap">
                    Cons:
                    {props.review.cons?.map((item, index) => (
                      <li key={index} className="cross py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </details>
      </div>
    </section>
  );
}

export default Accordion;
