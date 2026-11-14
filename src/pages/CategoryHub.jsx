import React from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { getAllCategories } from "../utils/functions";
import Card from "../components/Card";
function CategoryHub(props) {
  let breadcrumbs = ["Category Hub"];

  return (
    <>
      <div className="mx-auto lg:w-7xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="container">
          <section className="category_details">
            <Breadcrumbs items={breadcrumbs} />


          </section>
          <div className="category-cards grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {getAllCategories.map((category) => (
              <Card category={category} key={category.id} />

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryHub;
