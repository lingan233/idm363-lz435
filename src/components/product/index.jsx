import { useParams } from "react-router-dom"
import { format_price } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/user_cart"

function getProduct(key) {
    const redux_product = useSelector((state) => state.redux_product.value);
    return Object.values(redux_product).find(
        (product) => product.keyName === key
    );
};

const Product = () => {
    let params = useParams();
    let product = getProduct(params.productKey);
    const dispatch = useDispatch();

    function add_to_cart(keyName, name, price){
        dispatch(addToCart({
            keyName, name, price
        }));
    }
    function add_notification() {
        document.getElementById("add-btn-text").innerHTML = "Added!";
    }
    return(
        <>
        <p className="text-start my-4 py-4">Inventory {'>'} {product.item_title}</p>    
        <div>
            <img src={product.img} alt={product.item_title + " Image"} className="mw-100" />
                <div className="d-flex justify-content-around">
                    <div className="text-start">
                        <p className="fw-normal">{product.item_title}</p>
                        <h3 className="font-patrick-hand">{format_price(product.price)}</h3>
                        <p className="text-secondary">{product.quantity} Left</p>
                    </div>
                    <div>
                        <button
                        className="btn btn-dark"
                        onClick={() => {add_to_cart(product.keyName, product.item_title, product.price); add_notification()}}>
                        Add to Cart
                        </button>
                        <p id="add-btn-text" className="text-secondary"></p>
                    </div>
                </div>
        </div>
        </>
    );    
};


export default Product;