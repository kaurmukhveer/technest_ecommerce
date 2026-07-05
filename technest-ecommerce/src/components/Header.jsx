function Header({ currentPage, setCurrentPage, cartCount }) {
  return (
    <header className="header">
      <button className="logo" onClick={() => setCurrentPage("home")}>
        TechNest
      </button>

      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("shop")}>Shop</button>
        <button onClick={() => setCurrentPage("survey")}>Survey</button>
        <button className="cart-link" onClick={() => setCurrentPage("cart")}>
          Cart ({cartCount})
        </button>
      </nav>
    </header>
  );
}

export default Header;