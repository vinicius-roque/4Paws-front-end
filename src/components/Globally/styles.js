import styled from 'styled-components';

const AppWrapper = styled.main`
    background-color: yellow;
    min-width: 100vw;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1 {
        color: #FFFFFF;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input {
        background-color: #FFFFFF;
        color: #000000;
        width: 300px;
        height: 60px;
    }

    input::placeholder {
        color: #000000;
    }

    input[type="submit"] {
        background-color: green;
        color: #FFFFFF;
        cursor: pointer;
    }

    p {
        font-size: 20px;
        cursor: pointer;
    }
`;

export { AppWrapper, FormWrapper };