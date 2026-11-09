import { useMemo, useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Filters from "../components/ShopComponents/Filters";
import GridDisplay from "../components/ShopComponents/GridDisplay";
import ListDisplay from "../components/ShopComponents/ListDisplay";
import Pagination from "../components/ShopComponents/Pagination";
import SearchBar from "../components/ShopComponents/SearchBar";
import SortDropdown from "../components/ShopComponents/SortDropdown";
import ListViewButton from "../components/ListViewButton";
import { useFilterContext } from "../context/Filters";
import {
  contentPagintion,
  filteredProducts,
  searchProducts,
  sortProducts,
} from "../utils/functions";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("featured");
  const [isViewGrid, setIsViewGrid] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 9;
  const { filters } = useFilterContext();

  // Match the query against product details, tags, and categories.
  const matchingProducts = useMemo(() => searchProducts(searchTerm), [searchTerm]);

  // Apply the shared category filters and sort the resulting matches.
  const visibleProducts = useMemo(
    () => sortProducts(filteredProducts(matchingProducts, filters), sort),
    [filters, matchingProducts, sort],
  );
  // Keep the selected page valid when the number of results changes.
  const paginationData = useMemo(
    () => contentPagintion(page, limit, visibleProducts),
    [page, limit, visibleProducts],
  );
  const currentPage = paginationData.currentPage;
  // Render only the products belonging to the current page.
  const productsToDisplay = useMemo(
    () =>
      visibleProducts.slice(
        (currentPage - 1) * limit,
        currentPage * limit,
      ),
    [visibleProducts, currentPage, limit],
  );

  function handleSearch(event) {
    event.preventDefault();
    setSearchTerm(searchInput.trim());
    // New searches always begin at the first page of results.
    setPage(1);
  }

  // Pass page changes from the shared pagination control into local state.
  function handlePageChange(nextPage) {
    setPage(nextPage);
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="container">
        <section className="mb-6">
          <Breadcrumbs items={["Search"]} />
          <h1 className="text-4xl font-bold text-slate-900">Search products</h1>
          <p className="mt-3 text-slate-600">
            Find products by name, description, category, or product details.
          </p>
        </section>

        <SearchBar
          query={searchInput}
          onQueryChange={(event) => setSearchInput(event.target.value)}
          onSearch={handleSearch}
        />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <aside className="md:w-2/12">
            <Filters />
          </aside>
          <section className="mt-2 min-w-0 md:w-9/12">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <p aria-live="polite">
                {searchTerm
                  ? `Results for "${searchTerm}": ${visibleProducts.length}`
                  : `Products: ${visibleProducts.length}`}
              </p>
              <div className="flex items-center gap-2">
                <SortDropdown
                  sortView={(event) => {
                    setSort(event.target.value);
                    // Sorting changes the result order, so return to page one.
                    setPage(1);
                  }}
                />
                <ListViewButton
                  onClick={() => setIsViewGrid((isGrid) => !isGrid)}
                  view={isViewGrid}
                />
              </div>
            </div>

            {productsToDisplay.length > 0 ? (
              isViewGrid ? (
                <GridDisplay content={productsToDisplay} />
              ) : (
                <ListDisplay content={productsToDisplay} />
              )
            ) : (
              <p className="mt-10 text-center text-lg text-slate-600">
                No products found. Try a different search or adjust your filters.
              </p>
            )}

            {visibleProducts.length > 0 && (
              <Pagination
                totalPages={paginationData.totalPages}
                page={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Search;
