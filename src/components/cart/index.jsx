import { useDispatch, useSelector } from "react-redux";
import { format_price } from "../../utils";
import { addToCart, removeFromCart } from "../../features/user_cart"

const Cart = () => {

  const redux_user_cart = useSelector((state) => state.redux_user_cart.value);
  var totalPrice = 0;

  const dispatch = useDispatch();

  function add_to_cart(keyName, name, price){
    dispatch(addToCart({
      keyName, name, price
    }));
  }

  function remove_from_cart(keyName, name, price){
    dispatch(removeFromCart({
      keyName, name, price
    }));
  }
  return(
    <>
      <h5 className="font-patrick-hand text-start my-4 py-4">Shopping Cart</h5>    
      <ul className="p-0">
        {redux_user_cart.map((item, index) => {
          if (item.in_cart) {
            return (
            <li key={`cart-${index}`} className="row">
                <img src={item.img} alt={item.item_title + " Image"} className="h-100 col-3 col-sm-2" />
                <div className="col-6 col-sm-8 text-start">
                  <p>{item.item_title}</p>
                  <div className="d-flex align-items-center">
                    <button 
                      className="rounded-circle"
                      onClick={() => remove_from_cart(item.keyName, item.item_title, item.price)}>
                      -
                    </button>
                    <p className="pt-3 mx-3">{item.in_cart}</p>
                    <button 
                      className="rounded-circle"
                      onClick={() => add_to_cart(item.keyName, item.item_title, item.price)}>
                      +
                    </button>
                  </div>
                </div>

              <p className="font-patrick-hand col-3 col-sm-2">
                {format_price(item.price * item.in_cart)}
              </p>                  
            </li>
            );
          }
        return null;
        })}
        <li className="row my-4">
          <p className="fw-bold col-9 col-sm-10 text-start">Total</p>
          <h5 className="font-patrick-hand col-3 col-sm-2">
            {redux_user_cart.map((item, index) => {
              if (item.in_cart) {
                totalPrice += item.price * item.in_cart;
              }
            })}
            {format_price(totalPrice)}
          </h5>
        </li>
      </ul>
    </>
  );
};

export default Cart;