function Cart({ cart, setCart, setCurrentPage }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function updateQuantity(id, change) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
    );
  }

  function removeItem(id) {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  }

  if (cart.length === 0) {
    return (
      <main className="section empty-state">
        <h1>Your cart is empty</h1>
        <p>Browse products and add items before checking out.</p>
        <button onClick={() => setCurrentPage("shop")}>Continue Shopping</button>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section>
        <h1>Your Cart</h1>
        <p className="section-text">
          Review your items before moving to checkout.
        </p>

        <div className="cart-list">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="product-emoji">{item.emoji}</div>

              <div>
                <h2>{item.name}</h2>
                <p>{item.brand}</p>
                <strong>${item.price}</strong>
              </div>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>${subtotal}</strong>
        </div>
        <p className="section-text">Shipping and taxes are calculated later.</p>

        <button
          className="primary-action"
          onClick={() => setCurrentPage("checkout")}
        >
          Continue to Checkout
        </button>

        <button className="secondary-wide" onClick={() => setCurrentPage("shop")}>
          Continue Shopping
        </button>
      </aside>
    </main>
  );
}

export default Cart;