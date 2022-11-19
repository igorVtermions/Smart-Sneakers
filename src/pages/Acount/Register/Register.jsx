import { Container } from "./style";
import logo from "../../../assets/img/logo02.png"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";

export function Register (){
   const [email, setEmail] = useState("")
   const [ emailConf, setEmailConf ] = useState("")
   const [ pass, setPass ] = useState("")
   const [ error, setError ] =useState("")

   const navigate = useNavigate();
   const { signup } = useAuth()

   const handleSignup = () => {
    if (!email | !emailConf | !pass) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, pass);

    if(res){
        setError(res)
        return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
   }

    return(
        <Container>
            <img src={logo} alt="logo" className="logo" />

            <p>{error}</p>
            <div className="login">
                <h2>Registro</h2>
                <div className="content">
                    <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <Input
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                    />
                    <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={pass}
                    onChange={(e) => [setPass(e.target.value), setError("")]}
                    />
                    <div className="chk">
                        <input type="checkbox" name="name" required />
                        <p>aceita os termos de uso. <a href="#">Termos de uso</a></p>
                    </div>

                    <Button Text="Inscrever-se" onClick={handleSignup} />
                   <p className="register">Ir para o login: <Link  to="/login">clique aqui!!</Link> </p>
                   
                </div>
            </div>

        </Container>
    )
}