import "./App.css";
import Home from "./components/Home/home";
import { SignIn } from './components/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/SignIn/Login';
// import {ProductDetails}from "./Components/productDetails/ProductDetails"
// import {Address} from './Components/Address/Address'
import {Card2} from "./components/Card2"
// import {Add2Cart} from "./components/add2cartButton";
// import {ProductCarousel} from "./components/ProductCarousel";
// import {ProductPage} from "./components/ProductPage"
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
      </Routes>
      {/* <ProductDetails></ProductDetails> */}
      {/* <Address/> */}
    </div>
  );
}

export default App;

