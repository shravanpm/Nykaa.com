import "./App.css";
import Home from "./Components/Home/home";
import { SignIn } from './components/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/SignIn/Login';
// import {ProductDetails}from "./Components/productDetails/ProductDetails"
// import {Address} from './Components/Address/Address'
// import {Card2} from "./components/Card2"
// import {Add2Cart} from "./components/add2cartButton";
// import {ProductCarousel} from "./components/ProductCarousel";
// import {ProductPage} from "./components/ProductPage"
import { Cleansers } from './Components/ProductPages/Cleansers';
import { DryFruits } from './Components/ProductPages/DryFruits';
import { FacePrime } from './Components/ProductPages/FacePrime';
import { ProductsEyes } from './Components/ProductPages/ProductsEyes';

import { ProductDetails } from './Components/productDetails/ProductDetails';
import { Checkout } from './Components/Checkout/CheckOut'
import { ThankYou } from './Components/ThankYou/ThankYou'
function App() {
  return (

    <div className='App'>
      {/* <div>
     <ProductCarousel></ProductCarousel>
     </div> */}

      {/* <div>
       <Card2></Card2>
     </div> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cleansers" element={<Cleansers />}></Route>
        <Route path="/dryfruits" element={<DryFruits />}></Route>
        <Route path="/faceprime" element={<FacePrime />}></Route>
        <Route path="/productseyes" element={<ProductsEyes />}></Route>

        <Route path="/productsdetails" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
      </Routes>
      {/* <ProductDetails></ProductDetails> */}
      {/* <Address/> */}
    </div>
  );
}

export default App;

