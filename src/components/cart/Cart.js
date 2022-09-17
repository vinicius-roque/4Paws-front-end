import styled from 'styled-components';
import { Link} from "react-router-dom";
import Header from './homepage/Header.js';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cart(){

    const [cart, setCart] = useState([]);
    const [cont,setCont] = useState(0);
    var saldo = 0;

    useEffect(() => {
        getCart();
      }, []);

      function getCart() {
        axios
          .get("http://localhost:5000/cart")
          .then((answer) => setCart(answer.data))
          .catch((error) => console.log(error));
      }

      function remove(id){
        console.log(id)
        const promise = axios.delete("http://localhost:5000/cart", { id: id });
      console.log(promise)
    promise.then(alert("O produto foi removido do seu carrinho!"));
    
    promise.catch((err) => {
        console.log(err);
        alert("Não foi possível remover o produto do seu carrinho!");
      });
      }

      for(const product of cart){
            saldo += parseFloat(product.price);
        }
        console.log(saldo)
    return(
        <>
        <Header/>
        <HeaderPage>
            <p> Carrinho de compras</p>
            <Freeship>
                <p> Frete grátis acima de R$ 100,00</p>
                <p> Confira as regras</p>
            </Freeship>
        </HeaderPage>
        <CartBox>
            <Statement>
                <p>Produto</p>
                <p>Preço</p>
                <p>Quantidade</p>
            </Statement>
            {cart.map((product,index) => (
                //COLOCAR UMA VARIAVEL PARA VER SE O CARRINHO ESTA VAZIO E DAR UMA MENSAGEM
            <Product>
            <img src={product.img} />
           <p>{product.name}</p>
           <h5>R$ {product.price}0</h5>
           <h5>{product.quantity}</h5>
           
           <h5 onClick={() => remove(product._id)}>REMOVER</h5>
           </Product>
            ))}
          
        </CartBox>
        <Footer>
            <p>Total da compra: R$ {saldo}0</p>
            <button>
                <Link to="/Checkout"><p>Prosseguir para pagamento</p></Link>
            </button>
        </Footer>
        </>
    )
}

const HeaderPage = styled.div`
display: flex;
width: 95%;
background-color: #d06D00;
height:50px;
justify-content: space-between;
align-items: center;
margin-top: 150px;
border-radius: 5px;
padding: 10px;
`;

const Freeship = styled.div`
display: flex;
justify-content: flex-end;
width: 85%;
p{
    padding: 0px 8px;
}
`;

const CartBox = styled.div`
display: flex;
flex-direction: column;
width: 95%;
justify-content: flex-start;
padding: 55px 15px;
background-color: #EDF6F9;
border-radius: 5px;

img{
    width: 90px;
    height: 90px;
}
`;

const ProductBox = styled.div`
display: flex;
justify-content: flex-end;
border-radius: 10px;
`;

const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
width: 95%;
height: 50px;

p{
    margin-left: 5%; 
}
button{
    background-color: white;
    border-radius: 10px;
    height:35px;
    margin-right: 5%;
}

`;

const Product = styled.div`
display: flex;
background-color: white;
width: 100%;
padding: 20px;
border-bottom: 1px solid #ccc;
border-radius: 10px;
margin: 10px 0px;

p{
    display: flex;
    align-items: center;
    padding: 15px 6%;
    min-width: 120px;
    width: 40%;
}

h5{
    display: flex;
    align-items: center;
    padding: 15px 0px 15px 5%;
    min-width: 120px;
    width: 50%;
}
`;

const Statement = styled.div`
display: flex;
background-color: white;
width: 100%;
font-size: 20px;
border-radius: 10px;

p:first-child{
    padding: 25px 7%;
}

p:nth-child(2){
    padding: 25px 0px 25px 32%;
}

p:nth-child(3){
    padding: 25px 0px 25px 32%;
}
`;