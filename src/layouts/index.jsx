import Header from '../components/header';
import Home from '../components/home';
import Cart from '../components/cart';
import Form from "../components/form";
import Product from "../components/product";
import { Routes, Route, Link } from "react-router-dom";


const Layout = () => (
  <>
    <Header
        title = "Mamartos' Cat Shop"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="form" element={<Form />} />
      <Route path="product" element={<Product />} >
          <Route path=":productKey" element={<Product />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Not Found</p>
          </main>
        }
      />
    </Routes>
  </>
);

export default Layout;