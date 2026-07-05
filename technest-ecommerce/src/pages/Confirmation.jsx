function Confirmation({ setCurrentPage }) {
  return (
    <main className="confirmation-page">
      <section className="confirmation-card">
        <div className="success-icon">✓</div>

        <h1>Order Confirmed!</h1>
        <p>
          Thank you for shopping with TechNest. Your order has been placed
          successfully.
        </p>

        <div className="confirmation-details">
          <p>
            <strong>Order number:</strong> TN-20491
          </p>
          <p>
            <strong>Estimated delivery:</strong> 3–5 business days
          </p>
          <p>
            <strong>Status:</strong> Confirmation email sent
          </p>
        </div>

        <div className="confirmation-actions">
          <button onClick={() => setCurrentPage("shop")}>
            Continue Shopping
          </button>
          <button className="secondary-btn" onClick={() => setCurrentPage("survey")}>
            Give Feedback
          </button>
        </div>
      </section>
    </main>
  );
}

export default Confirmation;