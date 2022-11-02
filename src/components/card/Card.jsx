import { Container } from "./style";


export function Card ({image, name, sizes, price}){
    return(
        <Container>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{sizes}</p>
            <p className="price">{price}</p>

            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button>Comprar</button>
            </div>
        </Container>
    )
}