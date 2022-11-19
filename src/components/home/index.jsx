import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Form from "../Form";

const Home = () => {
    const redux_product = useSelector((state) => state.redux_product.value);
    // console.log("this is redux_product:", redux_product)
    // const productsArray = []
    // productsArray.push(redux_product)
    // console.log('productArray:', productsArray)
    return(
    <>
        {/* <Form /> */}
        <div>
            <Link to="form">Edit Inventory</Link>
        </div>
        <p>this is home</p>
        <div className='row'>
            {/* {console.log(redux_product)} */}
            {/* {console.log(Object.values(redux_product))} */}
            {Object.values(redux_product).map((item, index) => {
                return (
                <div className="text-start col-sm-6 col-md-4 col-lg-3" key={"inventory-" + index}>
                    <img src="https://via.placeholder.com/200" alt="" />
                    <p className="m-0">{item.item_title}</p>
                    <h4>${item.price}</h4>
                </div>
                )}
            )}
        </div>
    </>
    );
};

export default Home;