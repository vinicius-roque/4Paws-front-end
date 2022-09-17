import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Header from './homepage/Header.js';
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
                        <p>{product.price}</p>
                        </Products>
                    ))}
                    <p>Total da compra: R$ {saldo}0</p>
                </OrderDescription>
            </HeaderPage>
            <PaymentBox>
            <Forms >
                <input type="text" onChange={Change} placeholder=" Nome impresso no cartão" name='cardName'  />
                <input type="text" onChange={Change} placeholder=" Digitos do cartão" name='cardNumber' />
                <input type="password" onChange={Change} placeholder=" Código de segurança" name='securityNumber'  />
                <input type="text" onChange={Change} placeholder=" Validade */*" name='expirationDate' />
                <Link to="/Success"><button>
                    <p> ASSINAR</p>
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
width: 80%;
`;

const HeaderPage = styled.div`

font-size: 20px;
width: 80%;
`;

const OrderDescription = styled.div`
display: flex;
flex-direction: column;
width: 80%;
`;

const Products = styled.div`
display: flex;

`;


const PaymentBox = styled.div`
display: flex;
width: 80%;
`;

const Forms = styled.div`
display: flex;
flex-direction: column;
width: 80%;
`;
