import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
import { editProduct } from "../../features/products";
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firestore';
import PropTypes from 'prop-types';


const Details = ({keyName, img, title, price, quantity}) => {
  const dispatch = useDispatch();
  
  const [inventory, set_inventory] = useState({
    keyName, img, title, price, quantity
  })

  function handleChange(e) {
    if (e.target.type == "number") {
      set_inventory({
        ...inventory,
        [e.target.name]: parseFloat(e.target.value),
      })
    } else {
      set_inventory({
        ...inventory,
        [e.target.name]: e.target.value,
      })
    }
  }

  async function updateFirestore(keyName, img, title, price, quantity){
    const docRef = doc(db, 'cat_items', keyName);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data()
    setDoc(docRef, {
        ...docData,
        img: inventory.img,
        item_title: inventory.title,
        price: inventory.price,
        quantity: inventory.quantity
    })
    dispatch(editProduct({keyName, img, title, price, quantity}));
  }

  return (
    <tr>
      <td>
        <input
          name="img"
          onChange={handleChange}
          placeholder="image"
          type="text"
          defaultValue={img}
          className="p-1 w-100"
        />
      </td>
      <td>
        <input
          name="title"
          onChange={handleChange}
          placeholder="title name"
          type="text"
          defaultValue={title}
          className="p-1 w-100"
        />
      </td>
      <td style={{maxWidth: "90px"}}>
        <input
          name="price"
          onChange={handleChange}
          placeholder="price"
          type="number"
          defaultValue={price}
          className="p-1 w-100"
        />
      </td>
      <td style={{maxWidth: "60px"}}>
        <input
          name="quantity"
          onChange={handleChange}
          placeholder="quantity"
          type="number"
          defaultValue={quantity}
          className="p-1 w-100"
        />
      </td>
      <td>
        <button 
          type="button"
          className="btn btn-dark"
          onClick={e => updateFirestore(inventory.keyName, inventory.img, inventory.title, inventory.price, inventory.quantity)}>
          Save
        </button>
      </td>
    </tr>
  );
};

Details.propTypes = {
  keyName: PropTypes.string, 
  img: PropTypes.string, 
  title: PropTypes.string, 
  price: PropTypes.number, 
  quantity: PropTypes.number
}
export default Details;
