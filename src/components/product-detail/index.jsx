import { useParams } from "react-router-dom"
import { format_price } from "../../utils";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { update, updateCartNum } from "../../features/user_cart"

function getProduct(key) {
    const redux_product = useSelector((state) => state.redux_product.value);
    return Object.values(redux_product).find(
        (product) => product.keyName === key
    );
};

const Details = () => {
    let params = useParams();
    let product = getProduct(params.productKey);

    const redux_product = useSelector((state) => state.redux_product.value);
    const dispatch = useDispatch();
    const redux_user_cart = useSelector((state) => state.redux_user_cart.value);

    const [user_cart, set_user_cart] = useState([]);
    // console.log(user_cart);
    
    useEffect(() => {
        const shopping_cart = [...Object.values(redux_product)].map((product) => ({
        ...product,
        in_cart: 0,
        }));
        set_user_cart(shopping_cart);
        // dispatch(update(shopping_cart));
    }, []);

    // console.log("redux_user_cart", redux_user_cart);

    function add_to_cart(title) {

        const cart = [...user_cart];
        cart.forEach((product) => {
            if (product.item_title === title) {   
                product.in_cart++;
                // console.log(product.in_cart);
                // dispatch(update(product.in_cart));
            }
        });
        
        // console.log(cart[0].in_cart);
        set_user_cart(cart);
        // dispatch(update(cart));
    }

    return(
        <div>
            <img src={product.img} alt={product.item_title + " Image"} className="mw-100" />
            <p className="fw-light">{product.item_title}</p>
            <h5 className="font-patrick-hand">{format_price(product.price)}</h5>
            <p>{product.quantity} Left</p>
            <button onClick={() => add_to_cart(product.item_title, product.price)}>Add to Cart</button>
            {!user_cart.length ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {user_cart.map(({ title, price, in_cart }, index) => {
                    if (in_cart) {
                        return (
                        <li key={`cart-${index}`}>
                            {title}: {format_price(price * in_cart)} ({in_cart})
                        </li>
                        );
                    }
                    return null;
                    })}
                </ul>
            )}
        </div>
    
    );    
};


export default Details;