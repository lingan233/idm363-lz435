import { Link } from "react-router-dom";

const Header = ({title}) => (
    <header title={title}>
      <nav className="bg-dark p-2 fixed-top d-flex justify-content-between">
        <Link to="/" className="text-decoration-none">
          <div className="d-flex p-1">
            <img src="/images/shop-logo.png" alt="shop"/>
            <h5 className="mt-1 mb-0 px-2 text-yellow font-patrick-hand">{title}</h5>
          </div>
          </Link>
        <Link to="cart">
          <div className="bg-yellow rounded-circle p-2">
            <img src="/images/cart-logo.png" alt="cart"/>            
          </div>
        </Link>
      </nav>
    </header>
)

export default Header;