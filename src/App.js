import { Routes, Route } from "react-router-dom";

import Main from "./pages/home/Main";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
