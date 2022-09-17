import styled from 'styled-components';
import { Link} from "react-router-dom";

export default function Success(){

    return(
        <Box>
            <Header>
                <p> Pagamento efetuado com sucesso !</p>
                <h1> Estamos felizes em confirmar a aprovação do seu pagamento</h1>
            </Header>
            <Body>
                <button>
                    <p>Consultar pedidos</p>
                </button>
            </Body>
           
            <Footer>
                <Link to="/Home"><button>
                <p>Continuar comprando</p>
                </button> </Link>
            </Footer>
        </Box>
    )
}

const Box = styled.div`
display: flex;
flex-direction: column;
position: relative;
max-height: 675px;
max-width: 375px;
margin: 0 auto;
background-color: yellow;
`;

const Header = styled.div`
display: flex;
padding: 10% 0%;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
    text-align: center;
    font-size: 20px;
}
`;

const Body = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
button{
    height:40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
`;


const Footer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5% 0px 0px 0px;
button{
    height:40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
`;