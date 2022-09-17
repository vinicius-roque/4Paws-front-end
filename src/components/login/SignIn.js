import { useForm } from "../globally/useForm.js";
import { Form, useNavigate } from "react-router-dom";
import { login } from "../services/ports.js";
import { FormWrapper } from "../globally/styles.js";
import { useContext } from "react";
import UserContext from "../../contexts/userContext.js";

export default function SignIn() {
    const { setUser } = useContext(UserContext);

    function makeLocal(itemjs) {
        const session = JSON.stringify(itemjs);
        localStorage.setItem("session", session);
      }

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
        .then(answer => {
            setUser(answer.data);
            makeLocal(answer.data);
            navigate('/')
        })
        .catch(() => alert('Dado(s) inválido(s)'));
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


