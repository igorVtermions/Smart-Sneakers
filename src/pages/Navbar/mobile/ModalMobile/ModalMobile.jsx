import { Container } from "./style"
import { Link } from "react-router-dom"

export function ModalMobile({closeModal}){

    return(
        <Container>
            <button className="menubtn" onClick={closeModal}><ion-icon name="close-outline"></ion-icon></button>
        <div className='contentModal'>
        <input type="search" name="search" className="search" placeholder="qual seu Sneakers ?   🔎"  />
        <Link className="btn" to="/login">Entrar</Link>
        <ul>
                    <Link to="/list"><li>Catálogo</li></Link>
                    <li>Contatos</li>
                </ul>
        </div>
        </Container>
    )
}