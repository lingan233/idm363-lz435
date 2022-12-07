import {collection,  onSnapshot, query } from 'firebase/firestore'
import { db } from './firestore'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from './layouts';
import './App.css'
import { update } from './features/products'

function App() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  localStorage.setItem("products", JSON.stringify(products));

  useEffect (() => {
    const q = query(collection(db, 'cat_items'))
    onSnapshot(q, querySnapshot => {
      const productsArray = []
      querySnapshot.forEach(doc => {
        const productsData = {
          keyName: doc.id,
          ...doc.data(),
        }
        productsArray.push(productsData)
      })
      dispatch(update(productsArray)) 
      setProducts(productsArray) 
    })

  }, [])

  return (
    <div className="App">
      <Layout />
    </div>
  )
}

export default App
