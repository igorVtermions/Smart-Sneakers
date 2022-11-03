import { Container } from "./style";
import Logo from "../../assets/img/logo02.png";

export function Footer() {
  return (
    <Container>
      <div class="footer01">
        <div class="logo-footer">
          <img src={Logo} alt="logo" />
          <p>&copy; 2022 - Smart Sneakers</p>
          <p>All Rights Preserved</p>
        </div>
        <div class="icons">
          <a href="#" target="_blank">
            <ion-icon size="large" name="logo-instagram"></ion-icon>
          </a>
          <a href="#" target="_blank">
            <ion-icon size="large" name="logo-twitter"></ion-icon>
          </a>
          <a href="#" target="_blank">
            <ion-icon size="large" name="logo-whatsapp"></ion-icon>
          </a>
          <a href="#" target="_blank">
            <ion-icon size="large" name="logo-facebook"></ion-icon>
          </a>
        </div>
      </div>
      <div class="footer2">
        <p>&copy; SMART SNEAKERS</p>
      </div>
    </Container>
  );
}
