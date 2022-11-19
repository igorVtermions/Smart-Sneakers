import { Nav } from "./Style";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";
import  Modal  from "react-modal"
import { useState } from "react";
import { Mobile } from "./mobile/Mobile";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '25rem',
      height: '15rem',
      border: '2px solid #0090cb',
      color: 'black',
    },
  };

export function Navbar(){
    const [contactModal, setContactModal] = useState(false)

    function openContactModal(){
        setContactModal(true)
    }

    function closeContactModal(){
        setContactModal(false)
    }

    return(
        <>
        <Nav>
            <nav className="desktop">
                <div className="NavLinks">
                <Link to="/" ><img src={logo} alt="logo" /> </Link>
                
                <ul>
                    <Link to="/list"><li>Catálogo</li></Link>
                    <li onClick={openContactModal}>Contatos</li>
                </ul>
                </div>
                <input type="search" name="search" className="search" placeholder="qual seu Sneakers ?    🔎"  />

                <div className="btnNav">
                    <Link to="/payment" className="cart"><ion-icon name="cart-outline"></ion-icon></Link>
                    <Link className="btn" to="/login">Entrar</Link>
                </div> 
                <Modal isOpen={contactModal}
            onRequestClose={closeContactModal}
            style={customStyles} >
                <h2>Contatos 📞</h2>

                <div className="info">
                    <br />
                    <p>Telefone: (21) 92394-3326 | (11) 99193-5857</p>
                    <br />
                    <p>Email: smartsneakers@sneakers.com</p>
                    <br />
                    <p>Instagram: @Smart_Sneakers</p>
                    <br />
                    <p>Twitter: @smartSneakers</p>

                </div>
            </Modal> 
            </nav>
            <Mobile />
        </Nav>
            
        </>
    )
}