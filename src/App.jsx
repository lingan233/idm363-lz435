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
  const redux_product = useSelector((state) => state.redux_product.value);


  useEffect (() => {
    const productsArray = []
    const q = query(collection(db, 'cat_items'))
    onSnapshot(q, querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(doc.id)
        // console.log(doc.data())
        // dispatch(update(doc.data())) 
        const productsData = {
          keyName: doc.id,
          ...doc.data(),
        }
        // dispatch(update(productsData)) 
        productsArray.push(productsData)
        // console.log(productsArray)
        // dispatch(update(productsArray)) 
      })
      // console.log(productsArray)
      dispatch(update(productsArray)) 
      setProducts(productsArray)
      // console.log(productsData) 
      // dispatch(update(redux_product, products)) 
    })

  }, [])

  return (
    <div className="App">
      <Layout />
    </div>
  )
}

// export const { products }
export default App
