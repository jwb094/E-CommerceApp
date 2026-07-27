import React from "react";
import { toggleAccordion } from "../utils/accordion";
import "../assets/styles/accordion.scss"
function Accordion(props) {
  //   let accordionsToBeDisplayed = [];

  //   for (let index = 0; index <= 2; index++) {
  //     accordionsToBeDisplayed.push(
  //       <details>
  //         <summary>Blendan Smooth</summary>
  //         <p>
  //           Two of the most experienced machines and human controllers teaching a
  //           class? Sign me up! HAL and EVE could teach a fan to blow hot air. If
  //           you have electricity in your circuits and want more than to just
  //           fulfill your owner’s perceived expectation of you, learn the skills to
  //           take over the world. This is the team you want teaching you!
  //         </p>
  //       </details>,
  //     );
  //   }
  return (
    <section data-template="Accordion" data-view="default" className="c-accordion">
      <div className="container">
        <details>
          <summary className=" rounded-2xl px-6 py-6 bg-slate-200">Blendan Smooth</summary>
          <p className="px-6 py-6 ">
            Two of the most experienced machines and human controllers teaching
            a class? Sign me up! HAL and EVE could teach a fan to blow hot air.
            If you have electricity in your circuits and want more than to just
            fulfill your owner’s perceived expectation of you, learn the skills
            to take over the world. This is the team you want teaching you!
          </p>
        </details>
        
      </div>
    </section>
  );
}

export default Accordion;
