import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useSelector } from "react-redux"
import Order from "./pages/Order";

function App() {
  const user = useSelector((state)=>state.user.currentUser)
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:catrgory" element={<ProductList />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={user ? <Cart />:<Login/>} />
        <Route path="/login" element={user ? <Navigate to="/"/>:<Login/>} />
        <Route path="/register" element={user ? <Navigate to="/"/>:<Register/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/order" element={user ?<Order/>:<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
