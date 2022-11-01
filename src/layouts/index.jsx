import Header from '../components/header';
import Home from '../components/home';
import Cart from '../components/cart';
import { Routes, Route, Link } from "react-router-dom";


const Layout = () => (
  <>
      <Header
          title = "Mamartos' Cat Shop"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
  </>

);

export default Layout;