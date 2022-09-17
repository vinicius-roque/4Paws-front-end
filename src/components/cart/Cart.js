import styled from 'styled-components';
import { Link} from "react-router-dom";

export default function Cart(){

    return(
        <>
        <Header>
            <p> Carrinho de compras</p>
            <Freeship>
                <p> Frete grátis acima de R$ 100,00</p>
                <p> Confira as regras</p>
            </Freeship>
        </Header>
        <CartBox>
        <p>Imagem</p>
                <p>Descrição</p>
                <p>Preço</p>
                <p>Quantidade</p>
            <ProductBox>
                 <p>Produto</p>
                <p>Preço</p>
                <p>Quantidade</p>
            </ProductBox>
        </CartBox>
        <Footer>
            <p>Total da compra: R$ 800 reais</p>
            <button>
                <Link to="/Checkout"><p>Prosseguir para pagamento</p></Link>
            </button>
        </Footer>
        </>
    )
}

const Header = styled.div`
display: flex;
width: 80%;
background-color: red;
border-radius: 5px;
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
width: 80%;
align-items: center;
background-color: green;
border-radius: 5px;
height: 300px
`;

const ProductBox = styled.div`
display: flex;
justify-content: flex-end;
width: 85%;
border-radius: 5px;
;
`;

const Footer = styled.div`
display: flex;
justify-content: space-between;
background-color: white;
width: 80%;
`;