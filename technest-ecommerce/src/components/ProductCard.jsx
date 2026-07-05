function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <article className="product-card">
      <div className="product-emoji">{product.emoji}</div>

      <div>
        <p className="product-brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <p className="product-rating">⭐ {product.rating}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-stock">{product.availability}</p>
      </div>

      <div className="feature-list">
        {product.features.slice(0, 2).map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>

      <div className="card-actions">
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        <button className="secondary-btn" onClick={() => onViewDetails(product)}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default ProductCard;