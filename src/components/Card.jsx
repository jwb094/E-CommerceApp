import React from 'react';
import { Link } from "react-router";

function Card({ category }) {
  return (
    <article className="category-card flex min-w-0 w-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="category-card__content mb-6 flex flex-col gap-y-4">
        <h5 className="category-card__title text-xl font-semibold text-slate-800">
          {category.name}
        </h5>
        <p className="category-card__description">{category.description}</p>
      </div>

      <div className="category-card__footer mt-auto">
        <Link
          to={`/category/${category.slug}`}
          className="category-card__link flex items-center text-sm font-semibold text-slate-800 hover:underline"
        >
          Browse {category.name} Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="category-card__icon ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default Card;
