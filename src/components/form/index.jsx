
import { useDispatch, useSelector } from "react-redux";
import Details from "../form-detail";
import PropTypes from 'prop-types';


const Form = () => {
  const redux_product = useSelector((state) => state.redux_product.value);
  return (
    <div>
      <h5 className="font-patrick-hand text-start my-4 py-4">Edit Inventory</h5>
      <form>
        <table className="table table-sm table-responsive table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Image URL</th>
              <th>Product Title</th>
              <th>Price (¢)</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(redux_product).map((product, index) => (
              <Details
                key={"inventory-edit-" + index}
                keyName={product.keyName}
                img={product.img}
                title={product.item_title}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </tbody>
        </table>
      </form>
    </div>
    );
};

Form.propTypes = {
  keyName: PropTypes.string, 
  img: PropTypes.string, 
  title: PropTypes.string, 
  price: PropTypes.number, 
  quantity: PropTypes.number
}

export default Form;