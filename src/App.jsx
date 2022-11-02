import {collection,  onSnapshot, query } from 'firebase/firestore'
import { db } from './firestore'
import { useEffect, useState } from 'react'
import Layout from './layouts/index';
import './App.css'

function App() {
  const [inventory, setInventory] = useState([])
  const inventoryArray = []

  useEffect (() => {
    const q = query(collection(db, 'Inventory'))
    onSnapshot(q, querySnapshot => {
      // setInventory([])
      querySnapshot.forEach(doc => {
        console.log(doc.id)
        console.log(doc.data())
        const inventoryData = {
          keyName: doc.id,
          ...doc.data(),
        }
        inventoryArray.push(inventoryData)
      })
      setInventory(inventoryArray)
    })
  }, [])
  
  // useEffect (() => {
  //   console.log(inventory)
  // },[inventory])

  // const listItems = inventory.map((item, index) =>
  //   <div className="text-start col-sm-6 col-md-4 col-lg-3" key={index}>
  //       <img src="https://via.placeholder.com/200" alt="" />
  //       <p className="m-0">{item.keyName}</p>
  //       <h4>${item.Price}</h4>
  //   </div>
  // );
  // console.log(inventory) 
  return (
    <div className="App">
      <Layout />
      <div className='row'>
        {inventory.map((item, index) => {
          console.log(item.Price)
          return (
          <div className="text-start col-sm-6 col-md-4 col-lg-3" key={index}>
              <img src="https://via.placeholder.com/200" alt="" />
              <p className="m-0">{item.keyName}</p>
              <h4>${item.Price}</h4>
          </div>
          )}
        )}
      </div>
    </div>
  )
}

export default App
