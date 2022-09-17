import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../cart/Cart.js";
import Checkout from "../checkout/Checkout.js";
import SignIn from "../login/SignIn.js";
import SignUp from "../login/SignUp.js";
import GlobalStyle from "../globally/globalStyles.js";
import { AppWrapper } from "../globally/styles.js";
import HomePage from "../homepage/HomePage.js";
import Success from "../checkout/Success.js";
import UserContext from "../../contexts/userContext.js";
import { useState } from "react";

export default function App() {

const [user, setUser] = useState({
  _id: "",
  name: "",
  email: "",
  token: "",
});

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}
