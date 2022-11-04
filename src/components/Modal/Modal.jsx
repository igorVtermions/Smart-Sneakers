import { Container } from "./style";

export function ModalCard({ modalCard }) {
  return (
    <Container>
      {modalCard.map((item) => (
        <div key={item.name} className="cardModal">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p className="price">{item.price}</p>

            <div>
                {item.sizes.map((item)=> (<button key={item.sizes} className="btnSizes">{item}</button>))}
            </div>
          <div className="btn">
            <ion-icon name="heart-outline" id="heart"></ion-icon>
            <div className="btnCart">
                <button className="btnTrade" id="cartBtn">Carrinho</button>
            <button className="btnTrade" id="moneyBtn">Comprar</button>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
