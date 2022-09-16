import styled from "styled-components";
import Header from "./Header.js";
import Product from "./Product.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("http://localhost:5000/products")
      .then((answer) => setProducts(answer.data))
      .catch((error) => console.log(error));
  }

  return (
    <Wrapper>
      <Header />
      <Products>
        {products.map((product) => (
          <Product
            id={product._id}
            name={product.name}
            price={product.price}
            img={product.img}
            type={product.type}
          />
        ))}
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
