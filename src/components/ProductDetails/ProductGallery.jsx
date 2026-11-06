function ProductGallery(props) {
  console.log(props.productsGallery);
  return (
    <section
      data-template="ProductGallery"
      data-view="default"
      aria-label="Product image gallery"
      className="c-Product-Gallery | mx-auto w-full max-w-3xl"
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-xl">
        <div className="flex aspect-video snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {props.productsGallery.map((image, index) => (
            <img
              key={index}
              id={`slide-${index + 1}`}
              src={image.image}
              alt={`Product image ${index.alt || index + 1}`}
              className="h-full w-full shrink-0 snap-start object-cover"
            />
          ))}
          {/* <img
            id="slide1"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Scenic mountain landscape"
            className="h-full w-full shrink-0 snap-start object-cover"
          />
          <img
            id="slide2"
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mountain lake landscape"
            className="h-full w-full shrink-0 snap-start object-cover"
          />
          <img
            id="slide3"
            src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Forest landscape"
            className="h-full w-full shrink-0 snap-start object-cover"
          /> */}
        </div>
        <nav
          aria-label="Choose gallery image"
          className="absolute inset-y-0 right-0 flex flex-col items-center justify-center gap-4 px-4"
        >
          <a
            href="#slide1"
            aria-label="Show image 1"
            className="size-3 rounded-full bg-white/80 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
          <a
            href="#slide2"
            aria-label="Show image 2"
            className="size-3 rounded-full bg-white/80 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
          <a
            href="#slide3"
            aria-label="Show image 3"
            className="size-3 rounded-full bg-white/80 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
        </nav>
      </div>
    </section>
  );
}

export default ProductGallery;
