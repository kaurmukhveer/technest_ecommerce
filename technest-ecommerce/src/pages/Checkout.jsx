function Checkout({ setCurrentPage }) {
  return (
    <main className="section">
      <h1>Checkout</h1>
      <p>Checkout steps coming next.</p>
      <button onClick={() => setCurrentPage("cart")}>Back to Cart</button>
    </main>
  );
}

export default Checkout;