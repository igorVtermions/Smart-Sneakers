import { Container } from "./style";
import logo from "../../../assets/img/logo02.png"
import { Link } from "react-router-dom";

export function Register (){

    return(
        <Container>
            <img src={logo} alt="logo" />
            <div className="login">
                <h2>Registro</h2>
                <div className="content">
                <label for="email">Nome</label>
                    <input type="text" name="email" required />

                    <label for="email">E-mail</label>
                    <input type="email" name="email" required />

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" required />

                    <label for="senha">Confirme sua senha</label>
                    <input type="password" name="senha" required />
                    
                    <div className="chk">
                        <input type="checkbox" name="name" required />
                        <p>aceita os termos de uso. <a href="#">Termos de uso</a></p>
                    </div>

                    <button className="btn"  >Entrar</button>
                   <p className="register">Ir para o login: <Link  to="/login">clique aqui!!</Link> </p>
                   
                </div>
            </div>

        </Container>
    )
}