import React from "react";
import Accordion from "../components/Accordion"
// import { orderingFaqs,deliveryFaqs,returnsRefundsFaqs,
// paymentsFaqs,
// myAccountFaqs,
// productsFaqs,
// contactFaqs } from "../data/Faqs";
import { faqs } from "../data/Faqs";
function FAQs(props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <div className="container 2xl:container 2xl:mx-auto">
          <h1 className="text-center text-5xl">Frequently Asked Questions</h1>

          <section className="c-faqs">
           {/* <h3 className="text-3xl"> {orderingFaqs.title}</h3> */}

            {/* <Accordion title={orderingFaqs.title} content={orderingFaqs.QuestionsAndAnswers}/>  */}
            {faqs.map((item,index)=>
                <Accordion title={item.title}  question={item.QuestionsAndAnswers} key={index}/> 
            )}


            {/* <h3 className="text-3xl"> {deliveryFaqs.title}</h3>

            {deliveryFaqs.QuestionsAndAnswers.map((item,index)=>
            <Accordion question={item.question} answer={item.answer} key={index}/> 
            )}

            <h3 className="text-3xl"> {returnsRefundsFaqs.title}</h3>

            {returnsRefundsFaqs.QuestionsAndAnswers.map((item,index)=>
            <Accordion question={item.question} answer={item.answer} key={index}/> 
            )}

            <h3 className="text-3xl"> {paymentsFaqs.title}</h3>

            {paymentsFaqs.QuestionsAndAnswers.map((item,index)=>
            <Accordion question={item.question} answer={item.answer} key={index}/> 
            )} */}

            

          </section>
        </div>
      </div>
    </>
  );
}

export default FAQs;
