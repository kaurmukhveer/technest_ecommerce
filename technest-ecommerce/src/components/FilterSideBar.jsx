function FilterSidebar({ filters, setFilters, clearFilters }) {
  function updateFilter(name, value) {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h2>Filters</h2>
        <button onClick={clearFilters}>Clear</button>
      </div>

      <label>
        Search products
        <input
          type="text"
          value={filters.search}
          onChange={(event) => updateFilter("search", event.target.value)}
          placeholder="Try headphones or laptop"
        />
      </label>

      <label>
        Category
        <select
          value={filters.category}
          onChange={(event) => updateFilter("category", event.target.value)}
        >
          <option value="All">All categories</option>
          <option value="Laptops">Laptops</option>
          <option value="Headphones">Headphones</option>
          <option value="Tablets">Tablets</option>
          <option value="Accessories">Accessories</option>
        </select>
      </label>

      <label>
        Brand
        <select
          value={filters.brand}
          onChange={(event) => updateFilter("brand", event.target.value)}
        >
          <option value="All">All brands</option>
          <option value="Apple">Apple</option>
          <option value="Dell">Dell</option>
          <option value="Sony">Sony</option>
          <option value="Samsung">Samsung</option>
          <option value="Logitech">Logitech</option>
          <option value="Lenovo">Lenovo</option>
        </select>
      </label>

      <label>
        Price
        <select
          value={filters.price}
          onChange={(event) => updateFilter("price", event.target.value)}
        >
          <option value="All">All prices</option>
          <option value="Under200">Under $200</option>
          <option value="200to700">$200 - $700</option>
          <option value="Above700">Above $700</option>
        </select>
      </label>

      <label>
        Minimum rating
        <select
          value={filters.rating}
          onChange={(event) => updateFilter("rating", event.target.value)}
        >
          <option value="All">All ratings</option>
          <option value="4.5">4.5 stars and up</option>
          <option value="4.7">4.7 stars and up</option>
        </select>
      </label>

      <label>
        Availability
        <select
          value={filters.availability}
          onChange={(event) => updateFilter("availability", event.target.value)}
        >
          <option value="All">Any availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Limited Stock">Limited Stock</option>
        </select>
      </label>
    </aside>
  );
}

export default FilterSidebar;