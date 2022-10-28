import { Nav } from "./Style";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";

export function Navbar(){

    return(
        <Nav>
            <nav>
                <div className="NavLinks">
                <Link to="/" ><img src={logo} alt="logo" /> </Link>
                <ul>
                    <li><a href="">Catalogo</a></li>
                    <li><a href="">Contatos</a></li>
                </ul>
                </div>
                <input type="search" name="search" className="search" placeholder="qual seu Sneakers ?    🔎"  />

                <button className="btn">Entrar</button>
                
            </nav>
        </Nav>
    )
}