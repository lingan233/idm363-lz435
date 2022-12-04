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
  // const redux_product = useSelector((state) => state.redux_product.value);
  localStorage.setItem("products", JSON.stringify(products));
  // const productLocal = JSON.parse(localStorage.getItem("products"));
  // console.log(JSON.parse(localStorage.getItem("products")));

  useEffect (() => {
    const productsArray = []
    const q = query(collection(db, 'cat_items'))
    onSnapshot(q, querySnapshot => {
      querySnapshot.forEach(doc => {
        const productsData = {
          keyName: doc.id,
          ...doc.data(),
        }
        productsArray.push(productsData)
      })
      dispatch(update(productsArray)) 
      setProducts(productsArray)
      // localStorage.setItem("products", JSON.stringify(productsArray));
      // console.log(localStorage);
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
