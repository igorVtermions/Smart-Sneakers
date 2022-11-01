import logo from "../../../assets/img/logo02.png"
import { Container } from "./style"
import { Link  } from "react-router-dom"

export function Login (){

    return(
        <Container>
            <img src={logo} alt="logo" />
            <div className="login">
                <h2>Login</h2>
                <div className="content">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" required />

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" required />
                    
                    <div className="chk">
                        <input type="checkbox" name="name" required />
                        <p>Salvar conta.</p>
                    </div>

                    <button className="btn"  >Entrar</button>
                   <p className="register">Não possui conta ? <Link  to="/register">clique aqui!!</Link> </p>
                   
                </div>
            </div>
        </Container>
    )
}