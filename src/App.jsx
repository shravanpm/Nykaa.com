
import { useState } from "react";
import "./App.css";
import Home from "./components/Home/home";
import { SignIn } from './components/SignIn';
import { Route, Routes } from 'react-router-dom';
// import {ProductDetails}from "./Components/productDetails/ProductDetails"
// import {Address} from './Components/Address/Address'
function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
      {/* <ProductDetails></ProductDetails> */}
      {/* <Address/> */}
    </div>
  );
}

export default App;

