function Product({ product, setCurrentPage }) {
  if (!product) {
    return (
      <main className="section">
        <h1>No product selected</h1>
        <button onClick={() => setCurrentPage("shop")}>Back to Shop</button>
      </main>
    );
  }

  return (
    <main className="section">
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <p>${product.price}</p>
      <button onClick={() => setCurrentPage("shop")}>Back to Shop</button>
    </main>
  );
}

export default Product;