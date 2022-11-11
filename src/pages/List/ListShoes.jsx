import { useState } from "react";
import { Container } from "./style";
import Modal from 'react-modal'
import { ModalCard } from './modal/ModalCard'
 

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70rem',
    height: '50rem',
    border: '2px solid #0090cb',
  },
};

export function ListShoes(){

    const listShoes = [
      {
        brand: 'Nike',
        name: 'Air Jordan 4',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037449685356527769/11420221410911.webp',
        sizes: [ 39, 40, 42, 43, 44, 45 ],
        price: 'R$ 1400,00'
      },
      {
        brand: 'Nike',
        name: 'Nike Air Max 720',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037450045798223972/image-e927c7c8aa2e43b095428cc5f43e2829.jpg',
        sizes: [ 39, 40, 42, 43, 44 ],
        price: 'R$ 540,00'
      },
      {
        brand: 'Nike',
        name: 'Nike Air Force 1 07 LX',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427732050612254/Nike_air_force_1_07.jpg',
        sizes: [37, 38, 42, 44, 45, 46 ],
        price: 'R$ 749,99'
      },
      {
        brand: 'Nike',
        name: 'Nike Giannis Immortality 2',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039966601161748480/Z5821.jpg',
        sizes: [ 38 ,39 ,40, 41, 42 ],
        price: 'R$ 699,99'
      },
      {
        brand: 'Nike',
        name: 'Nike Air Force 1 Mid',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037448219589890128/Tenis-Nike-Air-Force-1-Mid-07-LV8-Next-Nature-Masculino-Branco-1.webp',
        sizes: [ 40, 41, 42 ],
        price: 'R$ 799,99'
      },
      {
        brand: 'Nike',
        name: 'Nike React Infinity Run Flyknit 3',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039889796492951633/fd3b5e42f6c7b09eb78933a903.webp',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44, 45 ],
        price: 'R$ 999,99'
      },
      {
        brand: 'Nike',
        name: 'Air Jordan 1 Hi FlyEase',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039890606153007175/3082021181741454.webp',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44, 45, 46 ],
        price: 'R$ 1299,99'
      },
      {
        brand: 'Nike',
        name: 'Air Jordan Legacy 312',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427732457472080/Screenshot_7.jpg',
        sizes: [ 40, 41,  42 ],
        price: 'R$ 1399,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas EQT Basketball',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037447652343824454/Tenis-adidas-EQT-Basketball-ADV-Masculino-Preto.webp',
        sizes: [ 37, 38, 40, 41, 42, 45],
        price: 'R$ 449,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas NMD',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037448574574800926/20220614175235_6175993825_D.webp',
        sizes: [37, 38, 40, 41, 42],
        price: 'R$ 800,00'
      },
      {
        brand: 'Adidas',
        name: 'Adidas ADI2000',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039959591791890492/20221019113045_8185991815_DMZ.webp',
        sizes: [37, 38, 42, 44],
        price: 'R$ 799,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas Crazy 1',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039894382331056289/GY306-6-300-1.webp',
        sizes: [ 40, 41, 42 ],
        price: 'R$ 899,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas Harden Stepback 3',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039895631633854584/adidas-tenis-de-basquete-junior-harden-stepback-3.jpg',
        sizes: [ 34, 35, 36, 37, 38, 39, 40, 41, 44 ],
        price: 'R$ 699,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas Dame 8 MR. Incredible',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039960124749521037/Tenis-adidas-Dame-8-Branco-5.webp',
        sizes: [ 34, 38, 39, 40, 42, 43, 44 ],
        price: 'R$ 999,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas Forum 84 Low',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039897244528283709/Tenis-adidas-Forum-84-Low-Masculino-Branco-5.webp',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44, 45],
        price: 'R$ 699,99'
      },
      {
        brand: 'Adidas',
        name: 'Adidas Forum MID Parley',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039897903549915206/gy3672cor00-1.jpg',
        sizes: [ 37, 38, 42 ],
        price: 'R$ 899,99'
      },
      {
        brand: 'Fila',
        name: 'Fila T1 Mid Saga',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427733422162071/630d778d829088c6f2f92d5884af125a.jpg',
        sizes: [37, 38, 40, 41, 42, 43 ],
        price: 'R$ 799,99'
      },
      {
        brand: 'Fila',
        name: 'Fila Ray Tracer Tr',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039898765420671026/F01L095_5363.webp',
        sizes: [37, 38, 40, 41, 42, 43, 44, 45],
        price: 'R$ 479,90'
      },
      {
        brand: 'Fila',
        name: 'Fila Float Knit',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039899650884382790/tenis-fila-float-knit-feminino-f02r006-4861-34942.jpg',
        sizes: [37, 38, 40, 41, 42, 43, 44, 45],
        price: 'R$ 599,99'
      },
      {
        brand: 'Fila',
        name: 'Fila Renno Vintage',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039900259872157706/F02L083_5191.webp',
        sizes: [ 40, 41, 42 ],
        price: 'R$ 449,99'
      },
      {
        brand: 'Fila',
        name: 'Fila Teratach 600 Hi',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039901550115553340/0177117000-0-.webp',
        sizes: [ 38, 39, 40, 41, 44 ],
        price: 'R$ 539,99'
      },
      {
        brand: 'Fila',
        name: 'Fila Axilus Ace Clay',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039902190355107972/f01tn004171-1168-tenis-fila-axilus-ace-clay-masc-preto-vermelho-e-grafite.jpg',
        sizes: [ 36, 38, 39, 40, 41, 42, 43 ],
        price: 'R$ 499,99'
      },
      {
        brand: 'Fila',
        name: 'Fila Racer Carbon',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039902730208153640/257137c2c8330af14663ce273789cd3e.jpg',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44],
        price: 'R$ 899,99'
      },
      {
        brand: 'Fila',
        name: 'Fila Hometown',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039903364156235796/F02L068_156.webp',
        sizes: [ 37, 38, 39, 41, 42, 43, 44, 45 ],
        price: 'R$ 299,99'
      },
      {
        brand: 'Puma',
        name: 'Puma Porsche Legacy Metal Energy SpeedCat Driving',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039907398015537152/png.webp',
        sizes: [36, 37, 38, 40, 41, 42, 43, 44],
        price: 'R$ 649,99'
      },
      {
        brand: 'Puma',
        name: 'Puma TRC Blaze Safari',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039907820637794384/png_1.webp',
        sizes: [37, 38, 40, 41, 42, 43, 44, 45],
        price: 'R$ 749,90'
      },
      {
        brand: 'Puma',
        name: 'Puma Players Loung Blaze Of Glory',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039908589713764462/png_2.webp',
        sizes: [37, 38, 40, 41, 42, 43, 44],
        price: 'R$ 799,99'
      },
      {
        brand: 'Puma',
        name: 'Puma Suede VTG Puma X Butter Goods',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039909183614627940/png.jpg',
        sizes: [ 37, 38, 39, 41, 42, 43, 44, 45 ],
        price: 'R$ 699,99'
      },
      {
        brand: 'Puma',
        name: 'Puma Scuderia Ferrari Drift Cat Decima MotoSport',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039909664273469460/png_3.webp',
        sizes: [  37, 38, 39, 40, 41, 44 ],
        price: 'R$ 649,99'
      },
      {
        brand: 'Puma',
        name: 'Puma TRC Blaze Puma X Joshua Vides',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039909929588363364/png_4.webp',
        sizes: [ 36, 38, 39, 40, 41, 42, 43 ],
        price: 'R$ 799,99'
      },
      {
        brand: 'Puma',
        name: 'Puma SlipStream Neymar JR',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039910377128992829/png_5.webp',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44],
        price: 'R$ 799,99'
      },
      {
        brand: 'Puma',
        name: 'Puma MB.02 Basketball',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039910920937279530/png_6.webp',
        sizes: [ 39, 41, 42, 43, 44, 45 ],
        price: 'R$ 1099,90'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour Speedform Gemini 3 GR',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039911487029903451/TAanis-de-Corrida-Masculino-Under-Armour-Speedform-Gemini-3-GR.webp',
        sizes: [39, 42],
        price: 'R$ 649,99'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour HOVR Phantom 2 INKNT DOTD',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039911904761618512/TAanis-de-Corrida-Unissex-Under-Armour-Hovr-PHANTOM-2-INKNT-DOTD.webp',
        sizes: [34, 39, 40, 41, 42, 44],
        price: 'R$ 799,90'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour HOVR Sonic 4 DOTD',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039912251253063710/TAanis-de-Corrida-Masculino-Under-Armour-Hovr-SONIC-4-DOTD.webp',
        sizes: [39, 40, 41, 42, 43, 44],
        price: 'R$ 699,99'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour Project Rock 5 Black Adam',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039912635610701824/3026599-001-02.webp',
        sizes: [ 39, 43, 44],
        price: 'R$ 1199,99'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour Curry Hovr Splash',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039913020354199623/TAanis-de-Basquete-Unissex-Under-Armour-Curry-Hovr-Splash.webp',
        sizes: [39, 40, 41, 44 ],
        price: 'R$ 799,99'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour Curry Flow Go',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039913427155566612/TAanis-de-Corrida-Unissex-Under-Armour-Curry-Flow-Go.webp',
        sizes: [ 36, 38, 39, 40, 41, 42, 43, 44 ],
        price: 'R$ 999,99'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour HOVR APEX 3',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039913807205634088/3024271-106-03.webp',
        sizes: [ 38, 39, 40, 41, 42, 43, 44],
        price: 'R$ 999,99'
      },
      {
        brand: 'Under Armour',
        name: 'Under Armour Project Rock 4 Marble',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039914621341028412/Tenis-de-Treino-Masculino-Under-Armour-Project-Rock-BSR-2-Marble.webp',
        sizes: [ 39, 41, 42, 43, 44 ],
        price: 'R$ 899,90'
      },
      {
        brand: 'Puma',
        name: 'Puma Lamelo Ball MB.01 X Rick And Morty',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1040258196209684531/tenis-puma-mb01-lamelo-ball-ricky-morty-masculino-1.1.webp',
        sizes: [ 39, 41, 42, 43, 44 ],
        price: 'R$ 799,90'
      },
      {
        brand: 'Nike',
        name: 'Air Jordan 7 Retro',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1040259499484794910/Tenis-Air-Jordan-X-PSG-7-Retro-Masculino-Branco-5.webp',
        sizes: [ 39, 41, 42, 43, 44,45 ],
        price: 'R$ 1899,99'
      },
    ];

    const [modalCard, setModalCard] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    function openModal(item){
      setModalCard([item])
      setModalOpen(true)
    }

    function closeModal (){
      setModalOpen(false)
    }

    const [shoesFilter, setShoesFilter] = useState(listShoes)

     function filterShoes(e){
      const brand = e.target.innerHTML;
      const filtered = listShoes.filter((item) => item.brand === brand)

      if(brand !== "Todos"){
        setShoesFilter(filtered)
      }else{
        setShoesFilter(listShoes)
      }
     }
      

      const shoes = shoesFilter.map((item) => <div className="container">
        <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button onClick={() => openModal(item)}>Comprar</button>
            </div>
        </div>)

    return(
        <Container>
          <div className="sideMenu">
            <div className="content">
              <h2>filtro:</h2>

    
            <div className="filterPrice">
            <h3>Filtro de preço:</h3>
                <div 
                className="filterValue">
                  <input type="checkbox" className="chk"/>
                  <p>até 250 reais</p>
                </div>
                <div className="filterValue">
                  <input type="checkbox" className="chk"/>
                  <p>até 500 reais</p>
                </div>
                <div className="filterValue">
                  <input type="checkbox" className="chk"/>
                  <p>até 750 reais</p>
                </div>
                <div className="filterValue">
                  <input type="checkbox" className="chk"/>
                  <p>até 1000 reais</p>
                </div>
                <div className="filterValue">
                  <input type="checkbox" className="chk"/>
                  <p>até 1500 reais</p>
                </div>
                <div className="filterValue">
                  <input type="checkbox" className="chk"/>
                  <p>até 2000 reais</p>
                </div>
            </div>
            
            <h3>Escolha a marca:</h3>
            <div className="filterBrand">
              <button className="btn" onClick={filterShoes}>Todos</button>
              <button className="btn" onClick={filterShoes}>Nike</button>
              <button className="btn" onClick={filterShoes}>Adidas</button>
              <button className="btn" onClick={filterShoes}>Fila</button>
              <button className="btn" onClick={filterShoes}>Puma</button>
              <button className="btn" onClick={filterShoes}>Under Armour</button>
            </div>
            </div>
          </div>

          <div className="card">
          {shoes}
          </div>

          <Modal isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}>
              <ModalCard modalCard={modalCard} listShoes={listShoes} />
            </Modal>
        </Container>
    )
}