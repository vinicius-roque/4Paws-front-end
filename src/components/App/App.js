import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart.js";
import Checkout from "../Checkout.js";
import SignUp from "../Login/SignUp.js";
import SignIn from "../Login/SignIn.js";
import GlobalStyle from "../Globally/globalStyles.js";
import { AppWrapper } from "../Globally/styles.js";
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