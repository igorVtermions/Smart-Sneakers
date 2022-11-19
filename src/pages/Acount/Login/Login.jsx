import logo from "../../../assets/img/logo02.png"
import { Container } from "./style"
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";

export function Login (){
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () =>{
        if(!email | !pass){
            setError("Preencha todos os campos");
            return;
        }

    const res = signin(email, pass);

    if(res){
        setError(res);
        return;
    }

    navigate("/")
}


    
    return(
        <Container>
            <img src={logo} alt="logo" className="logo" />

                <div className="error">
                    <p>{error}</p>
                </div>
            <div className="login">
                <h2>Login</h2>

                
                <div className="content">
                    <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />

                    <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={pass}
                    onChange={(e) => [setPass(e.target.value), setError("")]}
                    />
                    
                    <div className="chk">
                        <input type="checkbox" name="name" required />
                        <p>Salvar conta.</p>
                    </div>

                    <Button Text="Entrar" onClick={handleLogin}  className="btn"/>
                   <p className="register">Não possui conta ? <Link  to="/register">clique aqui!!</Link> </p>
                   
                </div>
            </div>
        </Container>
    )
}