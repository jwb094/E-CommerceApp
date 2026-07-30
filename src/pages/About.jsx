import React from "react";

function About(props) {
  return (
    <>
     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">

      <div className="container mx-auto">
        <h1 className="text-center text-5xl | mt-12">About BrightBuy</h1>

        <section className="about-us-content | py-12 px-6 md:px-24">
          <h5 className="text-xl | mt-4">Shop Smarter. Live Better.</h5>
          <p className="mt-6">
            Welcome to BrightBuy, your trusted online destination for quality
            products at competitive prices. We believe shopping should be
            simple, enjoyable and accessible, whether you're upgrading your
            home, refreshing your wardrobe, discovering the latest technology or
            searching for everyday essentials. Founded with a passion for
            delivering exceptional customer experiences, BrightBuy offers a
            carefully selected range of products from trusted brands across
            multiple categories. Our mission is to make online shopping
            convenient by combining an easy-to-use website, fast delivery
            options and outstanding customer support.
          </p>
          <h5 className="text-xl | mt-4">Our Mission</h5>
          <p className=" my-4">
            To provide customers with a reliable online shopping experience by
            offering quality products, competitive prices and exceptional
            service every step of the way.
          </p>
          <h5 className="text-xl | mt-4">What We Offer</h5>
          <p className=" my-4">
            At BrightBuy you'll find thousands of products across a wide range
            of categories, including:
          </p>
          <ul>
            Electronics & Technology
            <li>Home & Kitchen</li>
            <li>Fashion & Accessories</li>
            <li>Health & Beauty</li>
            <li>Sports & Outdoors</li>
            <li>Toys & Games</li>
            <li>Furniture</li>
            <li>Garden & DIY</li>
            <li>Pet Supplies</li>
            <li>Office & Stationery</li>
          </ul>
          <p className="my-4 ">
            Whether you're shopping for everyday essentials or searching for the perfect gift, we're committed to helping you find exactly what you need.
          </p>
          <h5 className="text-xl | my-6">Why Shop With BrightBuy?</h5>
          <p>
            We understand that customers expect more than just competitive prices. That's why we focus on delivering a complete shopping experience.
          </p>
          <h5 className="text-xl | mt-6">Our Commitment</h5>
          <p className="mt-4">Customer satisfaction is at the heart of everything we do. We continuously improve our website, product range and services to ensure every shopping experience is simple, secure and enjoyable.</p>
          <p className="mt-4">Whether you're placing your first order or returning as a loyal customer, thank you for choosing BrightBuy. We look forward to helping you discover great products for every part of your life.</p>
        </section>
      </div>
     </div>
    </>
  );
}

export default About;
