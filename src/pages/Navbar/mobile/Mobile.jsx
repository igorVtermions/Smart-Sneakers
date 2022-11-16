import { MobileContainer } from "./style"
import { Link } from "react-router-dom"
import logo from "../../../assets/img/logo.png"
import { useState } from "react"
import Modal from "react-modal"
import { ModalMobile } from "./ModalMobile/ModalMobile"

const customStyles = {
    content: {
      top: '50%',
      left: 'auto',
      right: '24%',
      bottom: 'auto',
      marginRight: '-74%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '53rem',
      border: 'none',
      backgroundColor: '#191A19',
      color: 'black',
      zIndex: '100',
      position: 'fixed'
    },
  };

export function Mobile(){
    const [openModal, setOpenModal] = useState(false)

    function modalOpen(){
        setOpenModal(true)
    }

    function closeModal(){
        setOpenModal(false)
    }

    return(
        <MobileContainer>
            <Link to="/" ><img src={logo} alt="logo" /> </Link>
            <div className="btnNav">
                <button className="menubtn"><ion-icon name="cart-outline"></ion-icon></button>
            <button className="menubtn" onClick={modalOpen}><ion-icon name="menu-outline"></ion-icon></button>
            </div>
            <Modal isOpen={openModal}
        overlayClassName="Overlay"
        style={customStyles}
        >
            <ModalMobile  closeModal={closeModal}/>
            </Modal>
            
        </MobileContainer>
    )
}