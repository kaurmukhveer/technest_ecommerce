function Product({ product, addToCart, setCurrentPage }) {
  if (!product) {
    return (
      <main className="section">
        <h1>No product selected</h1>
        <p>Please choose a product from the shop first.</p>
        <button onClick={() => setCurrentPage("shop")}>Back to Shop</button>
      </main>
    );
  }

  return (
    <main className="product-detail-page">
      <button className="back-btn" onClick={() => setCurrentPage("shop")}>
        ← Back to products
      </button>

      <section className="product-detail-card">
        <div className="detail-emoji">{product.emoji}</div>

        <div>
          <p className="product-brand">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="product-rating">⭐ {product.rating}</p>
          <p className="detail-price">${product.price}</p>
          <p className="product-stock">{product.availability}</p>

          <h2>Key information</h2>
          <ul>
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>

          <div className="feature-list">
            {product.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>

          <button
            className="primary-action"
            onClick={() => {
              addToCart(product);
              setCurrentPage("cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default Product;