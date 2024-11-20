import { Routes, Route } from "react-router-dom";

import Main from "./pages/home/Main";
import Cart from "./pages/cart/Cart";
import Favourites from "./components/favourites/Favourites";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
