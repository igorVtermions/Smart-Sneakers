import { Container } from "./style";

export function ListShoes(){

    const listNike = [
      {
        name: 'Air Jordan 4',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037449685356527769/11420221410911.webp',
        sizes: [ 39, 40, 42, 43, 44, 45 ],
        price: 'R$ 1400,00'
      },
      {
        name: 'Nike Air Max 720',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037450045798223972/image-e927c7c8aa2e43b095428cc5f43e2829.jpg',
        sizes: [ 39, 40, 42, 43, 44 ],
        price: 'R$ 540,00'
      },
      {
        name: 'Nike Air Force 1 07 LX',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427732050612254/Nike_air_force_1_07.jpg',
        sizes: [37, 38, 42, 44, 45, 46 ],
        price: 'R$ 749,99'
      },
      {
        name: 'Tênis Nike Giannis Immortality 2',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039966601161748480/Z5821.jpg',
        sizes: [ 38 ,39 ,40, 41, 42 ],
        price: 'R$ 699,99'
      },
      {
        name: 'Nike Air Force 1 Mid',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037448219589890128/Tenis-Nike-Air-Force-1-Mid-07-LV8-Next-Nature-Masculino-Branco-1.webp',
        sizes: [ 40, 41, 42 ],
        price: 'R$ 799,99'
      },
      {
        name: 'Nike React Infinity Run Flyknit 3',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039889796492951633/fd3b5e42f6c7b09eb78933a903.webp',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44, 45 ],
        price: 'R$ 999,99'
      },
      {
        name: 'Air Jordan 1 Hi FlyEase',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039890606153007175/3082021181741454.webp',
        sizes: [ 37, 38, 39, 40, 41, 42, 43, 44, 45, 46 ],
        price: 'R$ 1299,99'
      },
      {
        name: 'Air Jordan Legacy 312',
        image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427732457472080/Screenshot_7.jpg',
        sizes: [ 40, 41,  42 ],
        price: 'R$ 1399,99'
      },
    ];

    const listAdidas = [
        {
            name: 'Adidas EQT Basketball',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037447652343824454/Tenis-adidas-EQT-Basketball-ADV-Masculino-Preto.webp',
            sizes: [ 37, 38, 40, 41, 42, 45],
            price: 'R$ 449,99'
          },
          {
            name: 'Adidas NMD',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037448574574800926/20220614175235_6175993825_D.webp',
            sizes: [37, 38, 40, 41, 42],
            price: 'R$ 800,00'
          },
        {
          name: 'Adidas ADI2000',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039959591791890492/20221019113045_8185991815_DMZ.webp',
          sizes: [37, 38, 42, 44],
          price: 'R$ 799,99'
        },
        {
          name: 'Adidas CRAZY 1',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039894382331056289/GY306-6-300-1.webp',
          sizes: [ 40, 41, 42 ],
          price: 'R$ 899,99'
        },
        {
          name: 'Adidas Harden STEPBACK 3',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039895631633854584/adidas-tenis-de-basquete-junior-harden-stepback-3.jpg',
          sizes: [ 34, 35, 36, 37, 38, 39, 40, 41, 44 ],
          price: 'R$ 699,99'
        },
        {
          name: 'Adidas DAME 8 MR. INCREDIBLE',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039960124749521037/Tenis-adidas-Dame-8-Branco-5.webp',
          sizes: [ 34, 38, 39, 40, 42, 43, 44 ],
          price: 'R$ 999,99'
        },
        {
          name: 'Adidas FORUM 84 LOW',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039897244528283709/Tenis-adidas-Forum-84-Low-Masculino-Branco-5.webp',
          sizes: [ 37, 38, 39, 40, 41, 42, 43, 44, 45],
          price: 'R$ 699,99'
        },
        {
          name: 'Adidas FORUM MID PARLEY',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039897903549915206/gy3672cor00-1.jpg',
          sizes: [ 37, 38, 42 ],
          price: 'R$ 899,99'
        },
      ];

    const listFila = [
        {
            name: 'Fila T1 Mid Saga',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1037427733422162071/630d778d829088c6f2f92d5884af125a.jpg',
            sizes: [37, 38, 40, 41, 42, 43 ],
            price: 'R$ 799,99'
          },
          {
            name: 'Fila Ray Tracer Tr',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039898765420671026/F01L095_5363.webp',
            sizes: [37, 38, 40, 41, 42, 43, 44, 45],
            price: 'R$ 479,90'
          },
        {
          name: 'Fila Float Knit',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039899650884382790/tenis-fila-float-knit-feminino-f02r006-4861-34942.jpg',
          sizes: [37, 38, 40, 41, 42, 43, 44, 45],
          price: 'R$ 599,99'
        },
        {
          name: 'Fila Renno Vintage',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039900259872157706/F02L083_5191.webp',
          sizes: [ 40, 41, 42 ],
          price: 'R$ 449,99'
        },
        {
          name: 'Fila Teratach 600 Hi',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039901550115553340/0177117000-0-.webp',
          sizes: [ 38, 39, 40, 41, 44 ],
          price: 'R$ 539,99'
        },
        {
          name: 'Fila Axilus Ace Clay',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039902190355107972/f01tn004171-1168-tenis-fila-axilus-ace-clay-masc-preto-vermelho-e-grafite.jpg',
          sizes: [ 36, 38, 39, 40, 41, 42, 43 ],
          price: 'R$ 499,99'
        },
        {
          name: 'Fila Racer Carbon',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039902730208153640/257137c2c8330af14663ce273789cd3e.jpg',
          sizes: [ 37, 38, 39, 40, 41, 42, 43, 44],
          price: 'R$ 899,99'
        },
        {
          name: 'Fila Hometown',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039903364156235796/F02L068_156.webp',
          sizes: [ 37, 38, 39, 41, 42, 43, 44, 45 ],
          price: 'R$ 299,99'
        },
      ]

      const listPuma = [
        {
            name: 'Puma PORSCHE LEGACY METAL ENERGY SPEEDCAT DRIVING',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039907398015537152/png.webp',
            sizes: [36, 37, 38, 40, 41, 42, 43, 44],
            price: 'R$ 649,99'
          },
          {
            name: 'Puma TRC BLAZE SAFARI',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039907820637794384/png_1.webp',
            sizes: [37, 38, 40, 41, 42, 43, 44, 45],
            price: 'R$ 749,90'
          },
        {
          name: 'Puma PLAYERS LOUNGE BLAZE OF GLORY',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039908589713764462/png_2.webp',
          sizes: [37, 38, 40, 41, 42, 43, 44],
          price: 'R$ 799,99'
        },
        {
          name: 'Puma SUEDE VTG PUMA X Butter Goods',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039909183614627940/png.jpg',
          sizes: [ 37, 38, 39, 41, 42, 43, 44, 45 ],
          price: 'R$ 699,99'
        },
        {
          name: 'Puma SCUDERIA FERRARI DRIFT CAT DECIMA MOTORSPORT',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039909664273469460/png_3.webp',
          sizes: [  37, 38, 39, 40, 41, 44 ],
          price: 'R$ 649,99'
        },
        {
          name: 'Puma TRC BLAZE PUMA X JOSHUA VIDES',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039909929588363364/png_4.webp',
          sizes: [ 36, 38, 39, 40, 41, 42, 43 ],
          price: 'R$ 799,99'
        },
        {
          name: 'Puma SLIPSTREAM NEYMAR JR',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039910377128992829/png_5.webp',
          sizes: [ 37, 38, 39, 40, 41, 42, 43, 44],
          price: 'R$ 799,99'
        },
        {
          name: 'Puma MB.02 BASKETBALL',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039910920937279530/png_6.webp',
          sizes: [ 39, 41, 42, 43, 44, 45 ],
          price: 'R$ 1099,90'
        },
      ]

      const listUnder = [
        {
            name: 'Under Armour Speedform Gemini 3 GR',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039911487029903451/TAanis-de-Corrida-Masculino-Under-Armour-Speedform-Gemini-3-GR.webp',
            sizes: [39, 42],
            price: 'R$ 649,99'
          },
          {
            name: 'Under Armour HOVR Phantom 2 INKNT DOTD',
            image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039911904761618512/TAanis-de-Corrida-Unissex-Under-Armour-Hovr-PHANTOM-2-INKNT-DOTD.webp',
            sizes: [34, 39, 40, 41, 42, 44],
            price: 'R$ 799,90'
          },
        {
          name: 'Under Armour HOVR Sonic 4 DOTD',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039912251253063710/TAanis-de-Corrida-Masculino-Under-Armour-Hovr-SONIC-4-DOTD.webp',
          sizes: [39, 40, 41, 42, 43, 44],
          price: 'R$ 699,99'
        },
        {
          name: 'Under Armour Project Rock 5 Black Adam',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039912635610701824/3026599-001-02.webp',
          sizes: [ 39, 43, 44],
          price: 'R$ 1199,99'
        },
        {
          name: 'Under Armour Curry Hovr Splash',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039913020354199623/TAanis-de-Basquete-Unissex-Under-Armour-Curry-Hovr-Splash.webp',
          sizes: [39, 40, 41, 44 ],
          price: 'R$ 799,99'
        },
        {
          name: 'Under Armour Curry Flow Go',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039913427155566612/TAanis-de-Corrida-Unissex-Under-Armour-Curry-Flow-Go.webp',
          sizes: [ 36, 38, 39, 40, 41, 42, 43, 44 ],
          price: 'R$ 999,99'
        },
        {
          name: 'Under Armour HOVR APEX 3',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039913807205634088/3024271-106-03.webp',
          sizes: [ 38, 39, 40, 41, 42, 43, 44],
          price: 'R$ 999,99'
        },
        {
          name: 'Under Armour Project Rock 4 Marble',
          image: 'https://cdn.discordapp.com/attachments/1037425403985399841/1039914621341028412/Tenis-de-Treino-Masculino-Under-Armour-Project-Rock-BSR-2-Marble.webp',
          sizes: [ 39, 41, 42, 43, 44 ],
          price: 'R$ 899,90'
        },
      ]
      
      const nike = listNike.map((item) => <div className="container">
        <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button onClick={() => openModal(item)}>Comprar</button>
            </div>
        </div>)

        const adidas = listAdidas.map((item) => <div className="container">
        <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button onClick={() => openModal(item)}>Comprar</button>
            </div>
        </div>)

        const fila = listFila.map((item) => <div className="container">
        <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button onClick={() => openModal(item)}>Comprar</button>
            </div>
        </div>)

        const puma = listPuma.map((item) => <div className="container">
        <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <div className="btn">
            <ion-icon name="heart-outline"></ion-icon>
            <button onClick={() => openModal(item)}>Comprar</button>
            </div>
        </div>)

        const under = listUnder.map((item) => <div className="container">
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
            <h2 className="titleShoes">Sneakers da Nike</h2>
                <div className="Shoes">
                    {nike}
                </div>
                <h2 className="OtherShoes">Sneakers da Adidas</h2>
                <div className="Shoes">
                    {adidas}
                </div>
                <h2 className="OtherShoes">Sneakers da Fila</h2>
                <div className="Shoes">
                    {fila}
                </div>
                <h2 className="OtherShoes">Sneakers da Puma</h2>
                <div className="Shoes">
                    {puma}
                </div>
                <h2 className="OtherShoes">Sneakers da Under Armour</h2>
                <div className="Shoes">
                    {under}
                </div>
        </Container>
    )
}