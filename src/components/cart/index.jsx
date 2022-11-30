
const Cart = () => {

    return(
    <>
        <div className="d-flex justify-content-start my-4">
            <h5 className="font-patrick-hand">Shopping Cart</h5>
        </div>

        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        
        {/* {!user_cart.length ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {user_cart.map(({ title, price, in_cart }, index) => {
              if (in_cart) {
                return (
                  <li key={`cart-${index}`}>
                    {title}: {format(price * in_cart)} ({in_cart})
                  </li>
                );
              }
              return null;
            })}
          </ul>
        )} */}

        <div className="m-4">
            <button>Checkout</button>
        </div>
    </>
    );
};

export default Cart;