import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../globally/styles.js";
import { useForm } from "../globally/useForm.js";
import { registerUser } from "../services/ports.js";
import logo from "../../contexts/assets/logo1.png";

export default function SignUp() {
    const [forms, holdForms] = useForm({
        initState: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        }
    });

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        console.log(forms)
        const promise = registerUser(forms);
        
        promise
        .then(() => navigate('/sign-in'))
        .catch(error => {
            const errorStatus = error.response.status;
            
            switch (errorStatus) {
                case 422:
                    const errorsArray = error.response.data;
                    if(errorsArray.includes("\"passwordConfirmation\" must be [ref:password]")) {
                        const index = errorsArray.indexOf("\"passwordConfirmation\" must be [ref:password]");
                        errorsArray[index] = "both passwords must be equal";
                    }

                    alert(errorsArray.join('\n'));
                    break;
                
                case 409:
                    alert('E-mail já cadastrado, tente outro e-mail!');
                    break;
            
                default:
                    alert('Algo deu errado, tente novamente');
                    break;
            }
        });
    }

    return (
        <FormWrapper>
            <img src={logo} alt="logo1" />
            <form onSubmit={sendForm}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={forms.name}
                    onChange={holdForms}
                    required
                ></input>
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
                    type="password"
                    placeholder="Confirme a senha"
                    name="passwordConfirmation"
                    value={forms.passwordConfirmation}
                    onChange={holdForms}
                    required
                ></input>
                <input 
                    type="submit"
                    value="Cadastrar" 
                    required
                ></input>
            </form>
            <p onClick={() => navigate('/sign-in')}>Já possui cadastro? Clique aqui para entrar!</p>
        </FormWrapper>
    );
}