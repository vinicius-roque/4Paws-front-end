import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import GlobalStyle from "../styles/globalStyles.js";

export default function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}