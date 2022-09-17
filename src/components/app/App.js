import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../cart/Cart.js";
import Checkout from "../checkout/Checkout.js";
import SignIn from '../login/SignIn.js'
import SignUp from '../login/SignUp.js'
import GlobalStyle from "../globally/globalStyles.js";
import { AppWrapper } from "../globally/styles.js";
import HomePage from "../homepage/HomePage.js";
import Success from "../Success.js";


export default function App() {
  return (
    <>
    <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/sign-up" element={<SignUp />} /> 
             <Route path="/sign-in" element={<SignIn />} /> 
             <Route path="/cart" element={<Cart />} />
             <Route path="/checkout" element={<Checkout />} />
             <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}