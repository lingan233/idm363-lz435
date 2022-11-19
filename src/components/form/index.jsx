// Form.js

import { useDispatch, useSelector } from "react-redux";
import { update } from "../../features/products";

const Form = () => {
  const redux_product = useSelector((state) => state.redux_product.value);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const state = {
      ...redux_product,
      [e.target.name]: e.target.value,
    };
    dispatch(update(state));
  }

  return (
    <form>
      <div>
        {console.log(redux_product)}
        {Object.values(redux_product).map((item, index) => {
            // console.log(item)
            // console.log(index)
            return (
              <div key={"inventory-edit-" + index}>
                <input
                  name="item_title"
                  onChange={handleInputChange}
                  placeholder="title name"
                  type="text"
                  value={item.item_title}
                />
                <input
                  name="price"
                  onChange={handleInputChange}
                  placeholder="price"
                  type="number"
                  value={item.price}
                />
                <input
                  name="quantity"
                  onChange={handleInputChange}
                  placeholder="quantity"
                  type="number"
                  value={item.quantity}
                />
              </div>
            )}
        )}
      </div>
    </form>
  );
};

// export { addProducts };
export default Form;
