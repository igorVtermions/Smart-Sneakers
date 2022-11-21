import { Container } from "./style"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../../contexts/auth";


export function ModalMobile({closeModal}){
    const { user } = useContext(AuthContext)

    return(
        <Container>
            <button className="menubtn" onClick={closeModal}><ion-icon name="close-outline"></ion-icon></button>
        <div className='contentModal'>
        <input type="search" name="search" className="search" placeholder="qual seu Sneakers ?   🔎"  />
        {user ? <ion-icon name="person-circle-outline"></ion-icon> : <Link className="btn" to="/login">Entrar</Link>}
        <ul>
                    <Link to="/list"><li>Catálogo</li></Link>
                    <li>Contatos</li>
                </ul>
        </div>
        </Container>
    )
}