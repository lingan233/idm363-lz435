// Form.js

import { useDispatch, useSelector } from "react-redux";
import { update, update_product } from "../../features/products";

const Form = () => {
  const redux_product = useSelector((state) => state.redux_product.value);
  const dispatch = useDispatch();
  
  // const [inventory, set_inventory] = useState({
  //   id: 0,
  //   name: '',
  //   price: 0
  // })

  // useEffect(() => {
  //     set_inventory({
  //         ...inventory,
  //         id,
  //         name,
  //         price
  //     })
  // }, [])

  function handleChange(e) {
    const state = {
      ...redux_product,
      [e.target.name]: e.target.value,
    };
    // dispatch(update(state));
  }

  // const [inputValue, setInputValue] = useState('')
  // const handleChange = event => {
  //   setInputValue(event.target.value)
  // }

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
                  onChange={handleChange}
                  placeholder="title name"
                  type="text"
                  value={item.item_title}
                />
                <input
                  name="price"
                  onChange={handleChange}
                  placeholder="price"
                  type="number"
                  value={item.price}
                />
                <input
                  name="quantity"
                  onChange={handleChange}
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
