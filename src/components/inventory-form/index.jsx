import { doc, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firestore'

function InventoryItem({ description, index, keyName, name, price }) {
const [inventory, setInventory] = useState({
  name: '',
  description: '',
  price: '',
  index: 0,
})

useEffect(() => {
  setInventory({
    ...inventory,
    name,
    description,
    price,
    index,
  })
}, [])

function handleChange(e) {
  setInventory({
    ...inventory,
    [e.target.name]: e.target.value,
  })
  // We could update the firestore immediately...
}

async function handleUpdate(e) {
  e.preventDefault()
  await setDoc(doc(db, 'inventorys', keyName), {
    description: inventory.description,
    name: inventory.name,
    price: inventory.price,
  })
}

return (
  // Build the form
  //
  // The text inputs need a change event handler (handleChange)
  // The form needs an event handler that updates the firestore (handleUpdate)
  <div>
    <p>abc</p>
  </div>
)}

export default inventory;