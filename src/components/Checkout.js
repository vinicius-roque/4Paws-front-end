import styled from 'styled-components';
import { useState } from "react";
import { Link} from "react-router-dom";

export default function Checkout(){

    const [values,setValues] = useState({ cardName: '', cardNumber: '', securityNumber: '', expirationDate: ''});

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        }

    return(
        <Box>
            <Header>
                <h1> Checkout</h1>
                <OrderDescription>
                    <p>Aqui vai aparecer o produto, preço e quantidade</p>
                </OrderDescription>
            </Header>
            <PaymentBox>
            <Forms >
                <input type="text" onChange={Change} placeholder=" Nome impresso no cartão" name='cardName'  />
                <input type="text" onChange={Change} placeholder=" Digitos do cartão" name='cardNumber' />
                <input type="password" onChange={Change} placeholder=" Código de segurança" name='securityNumber'  />
                <input type="text" onChange={Change} placeholder=" Validade */*" name='expirationDate' />
                <button>
                    <p> ASSINAR</p>
                </button>
                </Forms>
            </PaymentBox>
        </Box>
    )
}

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 80%;
`;

const Header = styled.div`

font-size: 20px;
width: 80%;
`;

const OrderDescription = styled.div`
display: flex;
width: 80%;
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
