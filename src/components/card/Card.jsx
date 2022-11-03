import { useState } from "react";
import { Container } from "./style";
import { ModalCard } from "../Modal/Modal"
import Modal from "react-modal"


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40rem',
      height: '45rem',
      border: '2px solid #0090cb'
     
    },
  };
  
export function Card ({image, name, sizes, price}){
    const [modalOpen, setModalOpen] = useState(false)

    function openModal (){
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
    }

    return(
        <>
        <Container>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{sizes}</p>
            <p className="price">{price}</p>

            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button onClick={openModal}>Comprar</button>
            </div>
        </Container>

        <Modal isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
            <ModalCard />
        </Modal>
        </>
    )
}