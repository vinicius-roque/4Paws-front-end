import styled from 'styled-components';
import { Link} from "react-router-dom";
import Header from '../homepage/Header.js';
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
            <p>Carrinho de compras</p>
            <Freeship>
                <p> Frete grátis acima de R$ 100,00</p>
            </Freeship>
        </HeaderPage>
        <CartBox> 
            {cart.map((product,index) => (
                //COLOCAR UMA VARIAVEL PARA VER SE O CARRINHO ESTA VAZIO E DAR UMA MENSAGEM
            <Product>
                <img src={product.img} />
                <p>{product.name}</p>
                <h5>R$ {product.price}0</h5>
                <h5>{product.quantity}</h5>
            
                <h4 onClick={() => remove(product._id)}>REMOVER</h4>
           </Product>
            ))}
          
        </CartBox>
        <Footer>
            <p>Total da compra: R$ {saldo.toFixed(2)}</p>
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
    background-color: #006d77;
    height: 60px;
    justify-content: space-around;
    align-items: center;
    margin-top: 150px;
    border-radius: 5px;
    padding: 10px;
    color: #FFFFFF;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Freeship = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 85%;
    
    p {
        padding: 0px 8px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
`;

const CartBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    justify-content: flex-start;
    padding: 55px 15px;
    background-color: #edf6f9;
    border-radius: 5px;

    img{
        width: 90px;
        height: 90px;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #006d77;
    width: 95%;
    height: 50px;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    margin-bottom: 2px;
    color: #FFFFFF;

    p {  
        margin-left: 5%; 
        color: #000000;
    }
   
    button {
        background-color: #83c5be;
        border-radius: 10px;
        height:35px;
        margin-right: 5%;
        border: 2px solid #edf6f9;  
    }

    @media (max-width: 350px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 80px;
        margin-bottom: 5px;
        
        p {
            margin-bottom: 10px;
        }
    }
`;

const Product = styled.div`
    display: flex;
    align-items: center;
    background-color: #83c5be;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px 0px;

    p {
        display: flex;
        align-items: center;
        padding: 15px 6%;
        min-width: 120px;
        width: 40%;
    }

    h5 {
        display: flex;
        align-items: center;
        padding: 15px 0px 15px 5%;
        min-width: 120px;
        width: 50%;
    }

    h4 {
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 0px 15px 5%;
        min-width: 120px;
        width: 50%;
        height: 50px;
        border: 2px solid #edf6f9;
        background-color: #006d77;
        border-radius: 25px;
        padding: 12px;
        cursor: pointer;
    }

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        :last-child {
            margin-bottom: 30px;
        }

        img {
            height: 40%;
            width: 70%;
        }

        p {
            margin-left: 0.1%;
            justify-content: center;
        }

        h5 {
            margin-left: -5%;
            display: flex;
            justify-content: center;
        }

        h4 {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #edf6f9;
            background-color: #006d77;
            border-radius: 25px;
            padding: 12px;
        }
    }
`;