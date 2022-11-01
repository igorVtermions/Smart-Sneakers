import { Container } from "./Style";
import Carousel from "nuka-carousel/lib/carousel";
import BannerOne from "../../assets/img/banner-card-01.jpg";
import BannerTwo from "../../assets/img/banner-card-02.jpg";
import BannerTree from "../../assets/img/banner-card-03.jpg";
import BannerFour from "../../assets/img/banner-card-04.jpg";

export function Home() {
  return (
    <Container>
    
        <Carousel
          wrapAround={true}
          autoplay={true}
          className="carousel"
          enableKeyboardControls={true}
          cellAlign= "center"
          defaultControlsConfig={{nextButtonText:">", prevButtonText:"<", nextButtonStyle:{color: "#0090cb", fontSize:"50px", background:"transparent"}, prevButtonStyle:{color: "#0090cb", fontSize:"50px", background:"transparent"}, pagingDotsStyle:{padding:"10px"}}}
        >
          <img src={BannerOne} />
          <img src={BannerTwo} />
          <img src={BannerTree} />
          <img src={BannerFour} />
        </Carousel>

        <section className="card">
            <h2>ola</h2>
        </section>
 
    </Container>
  );
}
