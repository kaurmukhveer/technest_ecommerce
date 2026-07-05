import Hero from "../components/Hero";
import { products } from "../data/products";

function Home({ setCurrentPage }) {
  const featured = products.slice(0, 4);

  return (
    <main>
      <Hero setCurrentPage={setCurrentPage} />

      <section className="section">
        <h2>Shop by category</h2>
        <p className="section-text">Choose a familiar path to start browsing.</p>

        <div className="category-grid">
          {["Laptops", "Headphones", "Tablets", "Accessories"].map((category) => (
            <button
              key={category}
              className="category-card"
              onClick={() => setCurrentPage("shop")}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Featured picks</h2>
        <div className="featured-grid">
          {featured.map((product) => (
            <article className="mini-card" key={product.id}>
              <div className="product-emoji">{product.emoji}</div>
              <h3>{product.name}</h3>
              <p>{product.brand}</p>
              <strong>${product.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;