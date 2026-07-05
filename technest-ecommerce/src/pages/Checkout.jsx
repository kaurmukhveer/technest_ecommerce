import { useState } from "react";
import CheckoutStepper from "../components/CheckoutStepper";

const initialInfo = {
  name: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
};

const initialPayment = {
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

function Checkout({ cart, setCurrentPage }) {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState(initialInfo);
  const [payment, setPayment] = useState(initialPayment);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const infoComplete = Object.values(info).every((value) => value.trim() !== "");
  const paymentComplete = Object.values(payment).every(
    (value) => value.trim() !== ""
  );

  function updateInfo(event) {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }

  function updatePayment(event) {
    setPayment({ ...payment, [event.target.name]: event.target.value });
  }

  if (cart.length === 0) {
    return (
      <main className="section empty-state">
        <h1>Your cart is empty</h1>
        <p>Add an item before starting checkout.</p>
        <button onClick={() => setCurrentPage("shop")}>Back to Shop</button>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <p className="section-text">
        Follow each step to complete your order safely.
      </p>

      <CheckoutStepper currentStep={step} />

      {step === 1 && (
        <section className="checkout-panel">
          <h2>Information</h2>
          <p className="section-text">Tell us where to send your order.</p>

          <div className="form-grid">
            <input name="name" placeholder="Full name" value={info.name} onChange={updateInfo} />
            <input name="email" placeholder="Email" value={info.email} onChange={updateInfo} />
            <input name="address" placeholder="Address" value={info.address} onChange={updateInfo} />
            <input name="city" placeholder="City" value={info.city} onChange={updateInfo} />
            <input name="postalCode" placeholder="Postal code" value={info.postalCode} onChange={updateInfo} />
          </div>

          {!infoComplete && (
            <p className="helper-text">Please complete all fields to continue.</p>
          )}

          <button
            className="primary-action"
            disabled={!infoComplete}
            onClick={() => setStep(2)}
          >
            Continue to Payment
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="checkout-panel">
          <h2>Payment</h2>
          <p className="section-text">
            This is a prototype. No real payment is processed.
          </p>

          <div className="form-grid">
            <input name="cardName" placeholder="Name on card" value={payment.cardName} onChange={updatePayment} />
            <input name="cardNumber" placeholder="Card number" value={payment.cardNumber} onChange={updatePayment} />
            <input name="expiry" placeholder="Expiry MM/YY" value={payment.expiry} onChange={updatePayment} />
            <input name="cvv" placeholder="CVV" value={payment.cvv} onChange={updatePayment} />
          </div>

          {!paymentComplete && (
            <p className="helper-text">Enter payment details to continue.</p>
          )}

          <div className="checkout-actions">
            <button className="secondary-wide" onClick={() => setStep(1)}>
              Back
            </button>
            <button
              className="primary-action"
              disabled={!paymentComplete}
              onClick={() => setStep(3)}
            >
              Review Order
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="checkout-panel">
          <h2>Review</h2>
          <p className="section-text">Check your order before placing it.</p>

          {cart.map((item) => (
            <div className="review-row" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <strong>${item.price * item.quantity}</strong>
            </div>
          ))}

          <div className="review-total">
            <span>Total</span>
            <strong>${subtotal}</strong>
          </div>

          <div className="checkout-actions">
            <button className="secondary-wide" onClick={() => setStep(2)}>
              Back
            </button>
            <button
              className="primary-action"
              onClick={() => {
                setStep(4);
                setTimeout(() => setCurrentPage("confirmation"), 600);
              }}
            >
              Place Order
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="checkout-panel success-panel">
          <h2>Order placed!</h2>
          <p>Taking you to confirmation...</p>
        </section>
      )}
    </main>
  );
}

export default Checkout;