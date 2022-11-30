import Header from '../components/header';
import Home from '../components/home';
import Cart from '../components/cart';
import Form from "../components/form";
import Details from "../components/product-detail";
import { Routes, Route, Link } from "react-router-dom";


const Layout = () => (
  <>
      <Header
          title = "Mamartos' Cat Shop"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="form" element={<Form />} />
        <Route path="product-detail" element={<Details />} >
            <Route path=":productKey" element={<Details />} />
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