import React from "react";
import ContactUs from "../components/Contact/ContactUs";
function Contact(props) {
  return (
    <>
      {/* <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">

        <div class="container mx-auto px-4">
          <h1>Contact Us</h1>
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl sm:px-4 py-16 md:px-24 lg:px-24">
        <div className="container mx-auto px-0 ">
          <section className="contact-us-content | mt-24">
            <header className="page-header">
              <h1 className="text-4xl | mb-12">Contact BrightBuy</h1>
              <p>
                We're here to help. Whether you have a question about an order,
                need assistance with a product or simply want to get in touch,
                our friendly customer support team is ready to assist.
              </p>
            </header>

            <section className="contact-section | my-12">
              <h2 className="text-2xl | mb-12">Customer Support</h2>

              <p>
                Our support team aims to respond to all enquiries as quickly as
                possible. If you're contacting us about an existing order,
                please include your order number to help us assist you more
                efficiently.
              </p>

              <h3>Support Hours</h3>

              <ul>
                <li>
                  <strong>Monday – Friday:</strong> 8:30am – 6:00pm
                </li>
                <li>
                  <strong>Saturday:</strong> 9:00am – 4:00pm
                </li>
                <li>
                  <strong>Sunday &amp; Bank Holidays:</strong> Closed
                </li>
              </ul>
            </section>

            <section className="contact-section | my-12">
              <h2 className="text-2xl | mb-12">Contact Information</h2>

              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:support@brightbuy.co.uk">
                      support@brightbuy.co.uk
                    </a>
                  </p>
                </div>

                <div className="contact-item">
                  <h3>Telephone</h3>
                  <p>
                    <a href="tel:+442012345678">020 1234 5678</a>
                  </p>
                </div>
              </div>
            </section>

            <section className="contact-section | my-12">
              <h2 className="text-2xl | mb-12">Business Address</h2>

              <address>
                BrightBuy Ltd
                <br />
                25 Commerce House
                <br />
                London
                <br />
                EC2A 4AB
                <br />
                United Kingdom
              </address>
            </section>

            <section className="contact-section">
              <h2 className="text-2xl | mb-12">How Can We Help?</h2>

              <p>
                Our customer support team can assist with a wide range of
                enquiries, including:
              </p>

              <ul>
                <li>Order enquiries and order status updates</li>
                <li>Delivery tracking and shipping information</li>
                <li>Returns, refunds and exchanges</li>
                <li>Product information and recommendations</li>
                <li>Account login and profile support</li>
                <li>Payment and billing enquiries</li>
                <li>Technical issues using the BrightBuy website</li>
                <li>General feedback and suggestions</li>
              </ul>
            </section>

            <section className="contact-section | my-12">
              <h2 className="text-2xl | mb-6">Before You Contact Us</h2>

              <p>
                You may find the answer you're looking for in our&nbsp;&nbsp;
                <a href="/faqs">Frequently Asked Questions (FAQs)</a>, where
                we've answered many of the most common questions about ordering,
                delivery, returns, payments and account management.
              </p>
            </section>

            <section className="contact-section my-18">
              <h2 className="text-2xl | mb-12">Thank You</h2>

              <p>
                At BrightBuy, we're committed to providing an outstanding
                shopping experience from start to finish. Whether you need help
                before placing an order or support after your purchase, our team
                is always happy to assist.
              </p>

              <p>
                Thank you for choosing BrightBuy. We look forward to hearing
                from you.
              </p>
            </section>
          </section>

          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default Contact;
