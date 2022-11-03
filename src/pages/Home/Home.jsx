import { Container } from "./Style";
import { Card } from "../../components/card/Card";
import Carousel from "nuka-carousel/lib/carousel";
import BannerOne from "../../assets/img/banner-card-01.jpg";
import BannerTwo from "../../assets/img/banner-card-02.jpg";
import BannerTree from "../../assets/img/banner-card-03.jpg";
import BannerFour from "../../assets/img/banner-card-04.jpg";

export function Home() {

  const list = [
    {
      name: 'Air Jordan 4',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037449685356527769/11420221410911.webp',
      sizes: 'tamanho disponível: | 39 | 40 | 42 | 43 | 44 | 45 |',
      price: 'R$ 1400,00'
    },
    {
      name: 'Nike Air Max 720',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037450045798223972/image-e927c7c8aa2e43b095428cc5f43e2829.jpg',
      sizes: 'tamanho disponível: | 39 | 40 | 42 | 43 | 44 |',
      price: 'R$ 540,00'
    },
    {
      name: 'Nike Air Force 1 07 LX',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427732050612254/Nike_air_force_1_07.jpg',
      sizes: 'tamanho disponível: | 37 | 38 | 42 | 44 | 45 | 46 |',
      price: 'R$ 749,99'
    },
    {
      name: 'Air Jordan Legacy 312',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427732457472080/Screenshot_7.jpg',
      sizes: 'tamanho disponível: | 40 | 41 | 42 |',
      price: 'R$ 1399,99'
    },
    {
      name: 'Nike Air Force 1 Mid',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037448219589890128/Tenis-Nike-Air-Force-1-Mid-07-LV8-Next-Nature-Masculino-Branco-1.webp',
      sizes: 'tamanho disponível: | 40 | 41 | 42 |',
      price: 'R$ 799,99'
    },
    {
      name: 'Fila T1 Mid Saga',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427733422162071/630d778d829088c6f2f92d5884af125a.jpg',
      sizes: 'tamanho disponível: | 37 | 38 | 40 | 41 | 42 | 43 |',
      price: 'R$ 799,99'
    },
    {
      name: 'Adidas EQT Basketball',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037447652343824454/Tenis-adidas-EQT-Basketball-ADV-Masculino-Preto.webp',
      sizes: 'tamanho disponível: | 37 | 38 | 40 | 41 | 42 | 45 |',
      price: 'R$ 449,99'
    },
    {
      name: 'Adidas NMD',
      image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037448574574800926/20220614175235_6175993825_D.webp',
      sizes: 'tamanho disponível: | 37 | 38 | 40 | 41 | 42 |',
      price: 'R$ 800,00'
    },   
  ];

  const cards = list.map((card) => (<Card image={card.image} name={card.name} sizes={card.sizes} price={card.price} />))


  return (
    <Container>
    
        <Carousel
          wrapAround={true}
          autoplay={true}
          className="carousel"
          enableKeyboardControls={true}
          defaultControlsConfig={{nextButtonText:">", prevButtonText:"<", nextButtonStyle:{color: "black", fontSize:"50px", background:"transparent"}, prevButtonStyle:{color: "black", fontSize:"50px", background:"transparent"}, pagingDotsStyle:{padding:"10px"}}}
        >
          <img src={BannerOne} />
          <img src={BannerTwo} />
          <img src={BannerTree} />
          <img src={BannerFour} />
        </Carousel>

        <section className="content">
            <h2>Destaques da Semana 🔥</h2>

            <div className="card">
              {cards}  
            </div>
        </section>
 
    </Container>
  );
}
