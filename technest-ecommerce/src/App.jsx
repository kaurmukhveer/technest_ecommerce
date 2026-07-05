import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Survey from "./pages/Survey";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  function addToCart(product) {
    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === product.id);

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
      />

      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}

      {currentPage === "shop" && (
        <Shop
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "product" && (
        <Product
          product={selectedProduct}
          addToCart={addToCart}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "cart" && (
        <Cart cart={cart} setCart={setCart} setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "checkout" && (
        <Checkout cart={cart} setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "confirmation" && (
        <Confirmation setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "survey" && <Survey />}
    </div>
  );
}

export default App;