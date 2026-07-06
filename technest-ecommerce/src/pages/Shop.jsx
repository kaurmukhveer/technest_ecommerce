import { useMemo, useState } from "react";
import { products } from "../data/products";
import FilterSidebar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";

const defaultFilters = {
  search: "",
  category: "All",
  brand: "All",
  price: "All",
  rating: "All",
  availability: "All",
};

function Shop({ addToCart, setSelectedProduct, setCurrentPage }) {
  const [filters, setFilters] = useState(defaultFilters);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.category.toLowerCase().includes(filters.search.toLowerCase());

      const categoryMatch =
        filters.category === "All" || product.category === filters.category;

      const brandMatch = filters.brand === "All" || product.brand === filters.brand;

      const priceMatch =
        filters.price === "All" ||
        (filters.price === "Under200" && product.price < 200) ||
        (filters.price === "200to700" &&
          product.price >= 200 &&
          product.price <= 700) ||
        (filters.price === "Above700" && product.price > 700);

      const ratingMatch =
        filters.rating === "All" || product.rating >= Number(filters.rating);

      const availabilityMatch =
        filters.availability === "All" ||
        product.availability === filters.availability;

      return (
        searchMatch &&
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        ratingMatch &&
        availabilityMatch
      );
    });
  }, [filters]);

  function clearFilters() {
    setFilters(defaultFilters);
  }

  function viewDetails(product) {
    setSelectedProduct(product);
    setCurrentPage("product");
  }

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <p className="sale-badge">Explore TechNest</p>
        <h1>Find the right device faster.</h1>
        <p>
          Start with many products, then narrow your choices using filters for
          category, brand, price, rating, and availability.
        </p>
      </section>

      <section className="shop-layout">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
        />

        <div className="product-results">
          <div className="results-header">
            <h2>{filteredProducts.length} products found</h2>
            <p>Use filters to move from exploring options to choosing one item.</p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try removing a filter or searching with a broader word.</p>
              <button onClick={clearFilters}>Clear filters</button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onViewDetails={viewDetails}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Shop;