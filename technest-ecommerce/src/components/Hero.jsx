function Hero({ setCurrentPage }) {
  return (
    <section className="hero">
      <p className="sale-badge">Student Tech Sale</p>
      <h1>Upgrade your everyday tech.</h1>
      <p>
        Find laptops, headphones, tablets, and accessories that match your study,
        work, and entertainment needs.
      </p>
      <button onClick={() => setCurrentPage("shop")}>Shop Deals</button>
    </section>
  );
}

export default Hero;