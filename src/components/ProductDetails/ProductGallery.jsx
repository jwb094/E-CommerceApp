import { useState } from "react";
import { Link } from "react-router";

function ProductGallery(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      data-template="ProductGallery"
      data-view="default"
      aria-label="Product image gallery"
      className="c-Product-Gallery | mx-auto w-full max-w-3xl"
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-xl">
        <div
          onScroll={(event) => {
            const { scrollLeft, clientWidth } = event.currentTarget;
            setActiveIndex(Math.round(scrollLeft / clientWidth));
          }}
          className="flex aspect-video snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {props.productsGallery.map((image, index) => (
            <img
              key={index}
              id={`slide-${index + 1}`}
              src={image.image}
              alt={image.alt || `Product image ${index + 1}`}
              className="h-full w-full shrink-0 snap-start object-cover"
            />
          ))}
        </div>
        <nav
          aria-label="Choose gallery image"
          className="absolute inset-y-0 right-0 flex flex-col items-center justify-center gap-4 px-4"
        >
          {props.productsGallery.map((image, index) => (
            <Link
              key={index}
              to={`#slide-${index + 1}`}
              aria-label={`Show image ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`size-3 rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                activeIndex === index
                  ? "scale-125 bg-slate-800 ring-2 ring-white"
                  : "bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}

export default ProductGallery;
