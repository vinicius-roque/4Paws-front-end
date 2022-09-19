import styled from "styled-components";
import { addToCartButton } from "../services/ports.js";

export default function Product({ id, name, price, img, quantity,type }) {
  function addToCart() {
    console.log(id);
    
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
      <p>R$ {price}</p>
      <button onClick={() => addToCart()}> Adicionar ao carrinho </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #83c5be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17%;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px;
  border-radius: 10px;
  margin: 15px;

  img {
    height: 80%;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  h3 {
    display: flex;
    justify-content: center;
    font-size: 18px;
    width: 100%;
    font-weight: 600;
  }

  p {
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 100%;
    text-align: left;
    padding: 15px 0;
    font-weight: 500;
  }

  button {
    border: 2px solid #edf6f9;
    background-color: #006d77;
    border-radius: 25px;
    padding: 12px;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    height: 75vh;
    
    button {
      display: flex;
      justify-content: center;
      font-size: 16px;
      width: 100%;
      text-align: left;
      padding: 10px 0;
      margin: auto 15px auto 3px; 
    }
  }
`;
