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

  function getProducts(type) {
    axios
      .get("https://ecommerce-4paws.herokuapp.com/products")
      .then((answer) => {
        if (!type) {
          setProducts(answer.data);
        } else if (type === "other") {
          setProducts(
            products.filter(
              (item) =>
                (item.type !== "cat") &&
                (item.type !== "dog") &&
                (item.type !== "bird") &&
                (item.type !== "reptile")
            )
          );
        } else {
          setProducts(answer.data.filter((item) => item.type === type));
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Wrapper>
      <Header
        getProducts={getProducts}
        products={products}
        setProducts={setProducts}
      />
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
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  width: 100%;
`;
