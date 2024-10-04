import ImgMarketPlaceholder from '@assets/images/market-placeholder.webp';
import ImgWorld from '@assets/images/world.svg';
import ImgJakubMensik from '@assets/images/jakub-mensik.webp';
import ImgPedro from '@assets/images/pedro-martinez.webp';
import ImgChristopher from "@assets/images/christopher-o'connell.webp";
import ImgMatteoBerrettini from '@assets/images/matteo-berrettini.webp';
export const eventsList = [
  {
    id: 1,
    favourite: true,
    icon: ImgMarketPlaceholder,
    title: 'WTA Events',
    matches: [
      {
        id: 1,
        time: '3:00 AM',
        set: '2nd set',
        player1: {
          icon: ImgMarketPlaceholder,
          score: 0,
          subscore: 2,
          name: 'Shuai Zhang',
          point: 7.5,
        },
        player2: {
          icon: ImgMarketPlaceholder,
          score: 1,
          subscore: 0,
          name: 'Paula Badosa',
          point: 1.09,
        },
      },
    ],
  },
  {
    id: 2,
    favourite: false,
    icon: ImgWorld,
    title: 'ATA Events',
    matches: [
      {
        id: 1,
        time: '2:00 AM',
        set: '3rd set',
        player1: {
          icon: ImgJakubMensik,
          score: 1,
          subscore: 2,
          name: 'Jakub Mensik',
          point: 1.15,
        },
        player2: {
          icon: ImgPedro,
          score: 1,
          subscore: 1,
          name: 'Paula Badosa',
          point: 5.75,
        },
      },
      {
        id: 2,
        time: '1:55 AM',
        set: '2nd set',
        player1: {
          icon: ImgChristopher,
          score: 0,
          subscore: 5,
          name: "Christopher O'Connell",
          point: 4.5,
        },
        player2: {
          icon: ImgMatteoBerrettini,
          score: 1,
          subscore: 5,
          name: 'Matteo Berrettini',
          point: 1.2,
        },
      },
    ],
  },
];
