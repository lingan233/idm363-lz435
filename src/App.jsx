import {collection,  onSnapshot, query } from 'firebase/firestore'
import { db } from './firestore'
import { useEffect, useState, createContext, useContext } from 'react'
import Layout from './layouts/index'
import './App.css'

export const Context = createContext('Default Value');

function App() {
  const value = 'My Context Value';

  const [cat_items, setcat_items] = useState([])

  useEffect (() => {
    const cat_itemsArray = []
    const q = query(collection(db, 'cat_items'))
    onSnapshot(q, querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(doc.id)
        // console.log(doc.data())
        const cat_itemsData = {
          keyName: doc.id,
          ...doc.data(),
        }
        cat_itemsArray.push(cat_itemsData)
      })
      setcat_items(cat_itemsArray)
    })
  }, [])
  // console.log(cat_items)
  
  return (
    <Context.Provider value={value}>
      <div className="App">
        <Layout />
        <div className='row'>
          {cat_items.map((item, index) => {
            // console.log(item.Price)
            return (
            <div className="text-start col-sm-6 col-md-4 col-lg-3" key={index}>
                <img src="https://via.placeholder.com/200" alt="" />
                <p className="m-0">{item.item_title}</p>
                <h4>${item.price}</h4>
            </div>
            )}
          )}
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
