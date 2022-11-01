import { Routes, Route, Link } from "react-router-dom";

const Header = ({title}) => (
    <header title={title}>
      <nav className="bg-dark p-2 fixed-top d-flex justify-content-between">
        <Link to="/">{title}</Link>
        <Link to="cart">Cart</Link>
      </nav>
    </header>
)

export default Header;