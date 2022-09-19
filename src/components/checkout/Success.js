import styled from 'styled-components';
import { Link} from "react-router-dom";
import Header from '../homepage/Header.js';

export default function Success(){

    return(
        <>
        <Header/>
        <Box>
            
            <HeaderPage>
                <p>Pagamento efetuado com sucesso!</p>
                <h1>Estamos felizes em confirmar a aprovação do seu pagamento.</h1>
            </HeaderPage>
            <Body>
                <button>Consultar pedidos</button>
            </Body>
           
            <Footer>
                <Link to="/"><button>
                <p>Continuar comprando</p>
                </button> </Link>
            </Footer>
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
    display: flex;
    padding: 10% 0%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }

    p {
        margin-bottom: 100px;
        font-size: 30px;
        font-weight: 700;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2px solid black;
    
    button {
        color: #FFFFFF;
        height: 50px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #83c5be;
        background-color: #006d77;
        border-radius: 25px;
        padding: 12px;
        font-weight: 550;
        cursor: pointer;
    }
`;


const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5% 0px 0px 0px;
    
    button {
        color: #FFFFFF;
        height: 50px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #83c5be;
        background-color: #006d77;
        border-radius: 25px;
        padding: 12px;
        font-weight: 550;
        cursor: pointer;
    }
`;