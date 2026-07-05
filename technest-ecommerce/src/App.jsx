import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
      />

      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;