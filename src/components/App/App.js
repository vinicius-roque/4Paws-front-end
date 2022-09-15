import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart.js";
import Checkout from "../Checkout.js";
import SignUp from "../Login/SignUp.js";
import SignIn from "../Login/SignIn.js";
import { AppWrapper } from "../Globally/styles.js";
import HomePage from "../homepage/HomePage.js";


export default function App() {
  return (
    <>
      <AppWrapper>
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<SignIn />} />
             <Route path="/sign-up" element={<SignUp />} /> 
             <Route path="/home" element={<HomePage />} /> 
             <Route path="/cart" element={<Cart />} />
             <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}