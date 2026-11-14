import React from "react";
import Accordion from "../components/Accordion"
import { faqs } from "../data/Faqs";
function FAQs(props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <div className="container 2xl:container 2xl:mx-auto">
          <h1 className="text-center text-5xl">Frequently Asked Questions</h1>

          <section className="c-faqs">



            {faqs.map((item,index)=>
                <Accordion title={item.title}  question={item.QuestionsAndAnswers} key={index}/>
            )}






          </section>
        </div>
      </div>
    </>
  );
}

export default FAQs;
