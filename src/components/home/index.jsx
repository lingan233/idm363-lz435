import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { format_price } from "../../utils";

const Home = () => {
    const redux_product = useSelector((state) => state.redux_product.value);

    return(
    <>
        <div className="d-flex justify-content-between my-4 py-4">
            <h5 className="font-patrick-hand">Inventory</h5>
            <Link to="form" className="m-0 p-0 text-secondary">
                Edit Inventory</Link>
        </div>
        <div className='row'>
            {Object.values(redux_product).map((item, index) => {
                return (
                    <Link 
                        to={`/product/${item.keyName}`}
                        className="text-decoration-none text-dark text-start col-sm-6 col-md-4 col-lg-3" 
                        key={"inventory-" + index}
                    >
                        <img src={item.img} alt={item.item_title + " Image"} className="mw-100" />
                        <p className="fw-normal">{item.item_title}</p>
                        <h5 className="font-patrick-hand">{format_price(item.price)}</h5>
                        <Outlet />
                    </Link>
                )}
            )}
        </div>
    </>
    );
};

export default Home;