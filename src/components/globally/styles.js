import styled from 'styled-components';

const AppWrapper = styled.main`
    background-color: #edf6f9;
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
    
    img {
        width: 400px;
        height: 400px;
        margin-bottom: 20px;
    }

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    input {
        background-color: #83c5be;
        color: #000000;
        width: 326px;
        height: 58px;
        font-size: 20px;
        border-radius: 20px;
        padding-left: 15px;
        margin-bottom: 13px;
        border: 2px solid #006d77;
    }

    input::placeholder {
        color: #000000;
    }

    input[type="submit"] {
        background-color: #006d77;
        color: #FFFFFF;
        border: 2px solid #83c5be;
        cursor: pointer;
    }

    p {
        font-size: 17px;
        cursor: pointer;
    }
`;

export { AppWrapper, FormWrapper };