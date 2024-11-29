import { Routes, Route } from "react-router-dom";

import Main from "./pages/home/Main";
import Cart from "./pages/cart/Cart";
import Favourites from "./pages/favourites/Favourites";
import Basket from "./pages/basket/Basket";
import Products from "./pages/products/Products";
import Tsum from "./pages/tsum/Tsum";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tsum />} />
        <Route path="/man" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
