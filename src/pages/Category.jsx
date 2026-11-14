import React, { useState, useMemo } from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Filters from "../components/ShopComponents/Filters";
import Pagination from "../components/ShopComponents/Pagination";
import GridDisplay from "../components/ShopComponents/GridDisplay";
import ListDisplay from "../components/ShopComponents/ListDisplay";
import SortDropdown from "../components/ShopComponents/SortDropdown";
import ListViewButton from "../components/ListViewButton";

import {
  contentPagintion,
  filteredProducts,
  getCategoryBySlug,
  getCategoryProducts,
  sortProducts,
} from "../utils/functions";
import PageNotFound from "./PageNotFound";
import { useFilterContext } from "../context/Filters";

function Category(props) {
  let breadcrumbs;
  const [sort, setSort] = useState("");
  const [isViewGrid, setisViewGrid] = useState(true);
  const { cat_slug } = useParams();
  const { filters } = useFilterContext();
  const getCategory = getCategoryBySlug(cat_slug);
  const categoryPaginationData = getCategoryProducts(cat_slug);

  if (getCategory) {
    breadcrumbs = ["Category", getCategory.name];
  }
  if (!categoryPaginationData) {
    return <PageNotFound />;
  }
  //Filters
  console.log(filters);
  //Pagination
  //get Products by id
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);

  // Derive the visible category results from the shared filters and selected sort order.
  const paginatedDataSortedAndFiltered = useMemo(() => {
    return sortProducts(
      filteredProducts(categoryPaginationData, filters),
      sort,
    );
  }, [filters, sort]);

  const PaginationData = useMemo(
    () => contentPagintion(page, limit, paginatedDataSortedAndFiltered),
    [page, limit],
  );

  const productsToDisplay = useMemo(() =>
    paginatedDataSortedAndFiltered.slice((page - 1) * limit, page * limit),
  );

  //SortDropdown
  const handleSortView = (event) => {
    const value = event.target.value;
    setSort(value);
  };

  //Display ViewButton Options Grid or List
  function handleDisplayView(event) {
    setisViewGrid((status) => (status === true ? false : true));
  }

  function handlePageChange(value) {
    setPage(value);
  }

  return (
    <>
      <div className="mx-auto lg:w-7xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="container">
          <section className="category_details">
            <Breadcrumbs items={breadcrumbs} />

            <h1 className="text-4xl">{getCategory.name}</h1>

            <p className="mt-12 | text-md">{getCategory.description}</p>
          </section>

          <div className="flex flex-col md:flex-row justify-between">
            <section className="md:w-2/12">
              <Filters />
            </section>
            <section className="md:w-9/12 | mt-6">
              <div className="flex flex-row justify-between">
                <p>Filter Result : {paginatedDataSortedAndFiltered.length}</p>
                <div className="flex flex-row">
                  <SortDropdown sortView={handleSortView} />
                  <ListViewButton
                    onClick={handleDisplayView}
                    view={isViewGrid}
                  />
                </div>
              </div>

              {isViewGrid === true ? (
                <GridDisplay content={productsToDisplay} />
              ) : (
                <ListDisplay content={productsToDisplay} />
              )}
              
              {categoryPaginationData.length === 0 ? (
                <p className="text-center text-lg mt-6">No Products Found</p>
              ) : null}
              {categoryPaginationData.length !== 0 && (
                <Pagination
                  totalPages={PaginationData.totalPages}
                  page={PaginationData.currentPage}
                  onPageChange={handlePageChange}
                />
              )}

              {/* Grid/List    */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
