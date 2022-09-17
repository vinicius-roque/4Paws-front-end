import { useForm } from "../globally/useForm.js";
import { Form, useNavigate } from "react-router-dom";
import { login } from "../services/ports.js";
import { FormWrapper } from "../globally/styles.js";

export default function SignIn({ setUserData }) {
    const [forms, holdForms] = useForm({
        initState: {
            email: "",
            password: ""
        }
    });

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        const promise = login(forms);

        promise
        .then(res => {
            setUserData(res.data);
            navigate('/')
        })
        .catch(error => alert('Dado(s) inválido(s)'));
    }

    return (
        <FormWrapper>
            <h1>4Paws - Colocar logo aqui</h1>
            <form onSubmit={sendForm}>
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={forms.email}
                    onChange={holdForms}
                    required
                ></input>
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={forms.password}
                    onChange={holdForms}
                    required
                ></input>
                <input
                    type="submit"
                    value="Entrar"
                    required
                ></input>
            </form>
            <p onClick={() => navigate('/sign-up')}>Primeira vez por aqui? Faça o cadastro!</p>
        </FormWrapper>
    );
}


