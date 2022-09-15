import styled from "styled-components";
import Header from "../components/Header.js";
import Product from "../components/Product.js";

export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Products>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Products>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  width: 100%;
`;
