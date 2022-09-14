import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../Login/SignIn.js";
import SignUp from "../Login/SignUp.js";
import { AppWrapper } from "../Globally/styles.js";


export default function App() {
  return (
    <>
      <AppWrapper>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}