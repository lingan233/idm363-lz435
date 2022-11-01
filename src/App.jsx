import {collection,  onSnapshot, query } from 'firebase/firestore'
import { db } from './firestore'
import { useState } from 'react'
import Layout from './layouts/index';
import './App.css'

function App() {
  const [inventory, setInventory] = useState([])
  const inventoryArray = []

  const q = query(collection(db, 'Inventory'))
  onSnapshot(q, querySnapshot => {
    querySnapshot.forEach(doc => {
      // console.log(doc.id)
      // console.log(doc.data())
      const inventoryData = {
        keyName: doc.id,
        ...doc.data(),
      }
      inventoryArray.push(inventoryData)
    })
    setInventory(inventoryArray)
  })

  const listItems = inventory.map((item, index) =>
    <div className="text-start col-3" key={index}>
        <img src="https://via.placeholder.com/200" alt="" />
        <p className="m-0">{item.keyName}</p>
        <h4>${item.Price}</h4>
    </div>
  );
  // console.log({inventory})  
  return (
    <div className="App">
      <Layout />
      <div className='row'>{listItems}</div>
    </div>
  )
}

export default App
