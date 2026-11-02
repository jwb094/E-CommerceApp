import React from 'react';
import "../assets/styles/banner.scss"

function Banner(props) {
    return (
        <section
        data-template="hero-banner"
        data-view="default"
        class="bg-url bg-cover bg-center py-20 px-20 m-0 w-auto"
      >
        <div class="flex flex-col gap-y-6 max-w-2xl">
          <h1 class="text-white font-bold text-5xl">
            Everything You Need, All In One Place
          </h1>
          <p class="text-white font-medium text-2xl">
            Shop electronics, fashion, home essentials & more.
          </p>
        </div>
      </section>
    );
}

export default Banner;