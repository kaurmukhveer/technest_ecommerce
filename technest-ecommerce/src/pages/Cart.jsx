function Cart({ setCurrentPage }) {
  return (
    <main className="section">
      <h1>Your Cart</h1>
      <p>Cart page coming next.</p>
      <button onClick={() => setCurrentPage("shop")}>Continue Shopping</button>
    </main>
  );
}

export default Cart;