import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'
import { Provider } from 'react-redux'

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

)
