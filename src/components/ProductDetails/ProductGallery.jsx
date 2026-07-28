import React,{ useEffect }  from "react";
import "../../assets/styles/c-vertical-image-slider.scss"
import { initVerticalSlider } from "../../assets/scripts/vertical-image-slider.js";
function ProductGallery(props) {

        useEffect(() => {
        initVerticalSlider();
    }, []);

  return (
    <section
      data-template="ProductGallery"
      data-view="default"
      className="c-Product-Gallery"
    >
      <div className="container">
        <div className="image-slider-wrapper">
          <div className="image-slider">
            <img
              id="slide1"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              id="slide2"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              id="slide3"
              src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="image-slider__nav">
            <a href="#slide1" className="marker"></a>
            <a href="#slide2" className="marker"></a>
            <a href="#slide3" className="marker"></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;
