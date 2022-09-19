import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Header from '../homepage/Header.js';
import axios from "axios";

export default function Checkout(){

    const [values,setValues] = useState({ cardName: '', cardNumber: '', securityNumber: '', expirationDate: ''});
    const [cart, setCart] = useState([]);
    var saldo = 0;

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        }


        useEffect(() => {
            getCart();
          }, []);
    
          function getCart() {
            axios
              .get("http://localhost:5000/cart")
              .then((answer) => setCart(answer.data))
              .catch((error) => console.log(error));
          }

          for(const product of cart){
            saldo += parseFloat(product.price);
        }

    return(
        <>
        <Header/>
        <Box>
            <HeaderPage>
                <h1> Checkout</h1>
                <OrderDescription>
                     {cart.map((product,index) => (
                        <Products>
                        <p>{product.name}</p>
                        <p>R$ {product.price}0</p>
                        </Products>
                    ))}
                </OrderDescription>
                <Total>
                    <h5>Total da compra: R$ {saldo.toFixed(2)}</h5>
                </Total>
            </HeaderPage>
            <PaymentBox>
                <h3>Insira os dados do cartão:</h3>
            <Forms >
                <input type="text" onChange={Change} placeholder=" Nome impresso no cartão" name='cardName'  />
                <input type="text" onChange={Change} placeholder=" Digitos do cartão" name='cardNumber' />
                <input type="password" onChange={Change} placeholder=" Código de segurança" name='securityNumber'  />
                <input type="text" onChange={Change} placeholder=" Validade */*" name='expirationDate' />
                <Link to="/Success"><button>
                    <p>Finalizar pedido</p>
                </button></Link>
            </Forms>
            </PaymentBox>
        </Box>
        </>
    )
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const HeaderPage = styled.div`
    margin: 0 auto;
    font-size: 20px;
    width: 55%;
    min-width: 375px;
    margin-bottom: 15px;

h1{
    margin-bottom: 15px;
    background-color: #EDF6F9;
    height: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
}
`;

const OrderDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #EDF6F9;
    border-radius: 10px;

    h5 {
        min-width: 200px;
    }
`;

const Total = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #83c5be;

    h5 {
        margin-left: 10px;
        text-align: center;
        min-width: 250px;
    }
`;

const Products = styled.div`
    display: flex;
    
    :first-child {
        margin-top: 25px;
    }
    
    p {
        padding: 15px 15px;
        min-width: 240px;
        text-align: center;
    }
`;


const PaymentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Forms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
        background-color: #edf6f9;
        margin: 5px 0px;
        width: 50%;
        height: 40px;
        border-radius: 10px;
        border: 2px solid #006d77;
    }

    button {
        color: #FFFFFF;
        min-width: 150px;
        min-height: 40px;
        border-radius: 10px;
        background-color: #006d77;
        border: 2px solid #83c5be;
    }
`;
