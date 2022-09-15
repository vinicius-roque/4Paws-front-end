import styled from "styled-components";

export default function Product() {
  return (
    <Wrapper>
      <img src="https://cf.shopee.com.br/file/bdd90426b3eb1b6d1432099ac724bd7d" />
      <h3> Bebedouro fonte para gatos </h3>
      <p> R$ 36,00 </p>
      <button> Adicionar ao carrinho </button>
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
    border: 2px solid #E29578;
    background-color: #ffddd2;
    border-radius: 25px;
    padding: 12px;
  }
`;
