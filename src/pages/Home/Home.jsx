import { Container } from "./Style";
import Carousel from "nuka-carousel/lib/carousel";
import BannerOne from "../../assets/img/banner-card-01.jpg"
import BannerTwo from "../../assets/img/banner-card-02.jpg"
import BannerTree from "../../assets/img/banner-card-03.jpg"
import BannerFour from "../../assets/img/banner-card-04.jpg"

export function Home (){

    return(
        <Container>
            <div >
                <Carousel wrapAround={true}>
                    <img src= {BannerOne} />
                    <img src= {BannerTwo} />
                    <img src= {BannerTree} />
                    <img src= {BannerFour} />
                </Carousel>
            </div>
        </Container>
    )
}