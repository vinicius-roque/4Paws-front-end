import styled from "styled-components";
import { addToCartButton } from "../services/ports.js";

export default function Product({ id, name, price, img, type }) {
  function addToCart() {
    console.log("rodei uma vez");
    
    const promise = addToCartButton({ id: id });
    promise.then(alert("O produto foi adicionado ao seu carrinho!"));
    promise.catch((err) => {
        console.log(err);
        alert("Não foi possível adicionar o produto ao seu carrinho!");
      });
  }

  return (
    <Wrapper>
      <img src={img} />
      <h3>{name}</h3>
      <p> R$ {price}</p>
      <button onClick={() => addToCart()}> Adicionar ao carrinho </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px;
  border-radius: 10px;
  margin: 15px;

  img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    width: 100%;
  }

  p {
    font-size: 16px;
    width: 100%;
    text-align: left;
    padding: 15px 0;
  }

  button {
    border: 2px solid #e29578;
    background-color: #ffddd2;
    border-radius: 25px;
    padding: 12px;
  }
`;
