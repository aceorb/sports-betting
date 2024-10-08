import ImgWorld from '@assets/images/world.svg';
import ImgJakubMensik from '@assets/images/jakub-mensik.webp';
import ImgPedro from '@assets/images/pedro-martinez.webp';
import ImgChristopher from "@assets/images/christopher-o'connell.webp";
import ImgMatteoBerrettini from '@assets/images/matteo-berrettini.webp';
import ImgLogo from '@assets/images/logo.svg';

import IconSoccer from '@assets/icons/soccer-icon.svg';
import IconFootball from '@assets/icons/football-icon.svg';
import IconBaseball from '@assets/icons/baseball-icon.svg';
import IconBasketball from '@assets/icons/basketball-icon.svg';
import IconHockey from '@assets/icons/hockey-icon.svg';
import IconKabaddi from '@assets/icons/kabaddi-icon.svg';
import IconVolleyball from '@assets/icons/volleyball-icon.svg';
import IconCricket from '@assets/icons/cricket-icon.svg';
import IconTennis from '@assets/icons/tennis-icon.svg';
import IconHandball from '@assets/icons/handball-icon.svg';
import IconMotorsports from '@assets/icons/motorsports-icon.svg';
import IconWaterpolo from '@assets/icons/waterpolo-icon.svg';
import IconTabletennis from '@assets/icons/tabletennis-icon.svg';
import IconRugby from '@assets/icons/rugby-icon.svg';
import IconEsports from '@assets/icons/esports-icon.svg';
import IconPolitics from '@assets/icons/politics-icon.svg';
import IconGolf from '@assets/icons/golf-icon.svg';
export const matchesCountList = [
  {
    id: 1,
    icon: 'live',
    title: 'Live',
    count: 3,
  },
  {
    id: 2,
    icon: IconSoccer,
    title: 'Soccer',
    count: 4,
  },
  {
    id: 3,
    icon: IconFootball,
    title: 'Football',
    count: 4,
  },
  {
    id: 4,
    icon: IconVolleyball,
    title: 'Volleyball',
    count: 2,
  },
  {
    id: 5,
    icon: IconBaseball,
    title: 'Baseball',
    count: 8,
  },
  {
    id: 6,
    icon: IconBasketball,
    title: 'Basketball',
    count: 9,
  },
  {
    id: 7,
    icon: IconHockey,
    title: 'Hockey',
    count: 12,
  },
  {
    id: 8,
    icon: IconKabaddi,
    title: 'Fighting',
    count: 0,
  },
  {
    id: 9,
    icon: IconCricket,
    title: 'Cricket',
    count: 2,
  },
  {
    id: 10,
    icon: IconTennis,
    title: 'Tennis',
    count: 9,
  },
  {
    id: 11,
    icon: IconHandball,
    title: 'Handball',
    count: 20,
  },
  {
    id: 12,
    icon: IconMotorsports,
    title: 'MotoSports',
    count: 1,
  },
  {
    id: 13,
    icon: IconWaterpolo,
    title: 'Waterpolo',
    count: 12,
  },
  {
    id: 14,
    icon: IconTabletennis,
    title: 'TableTennis',
    count: 3,
  },
  {
    id: 15,
    icon: IconRugby,
    title: 'Rugby',
    count: 9,
  },
  {
    id: 16,
    icon: IconEsports,
    title: 'ESports',
    count: 5,
  },
  {
    id: 17,
    icon: IconPolitics,
    title: 'Politics',
    count: 9,
  },
  {
    id: 18,
    icon: IconGolf,
    title: 'Golf',
    count: 8,
  },
];
export const eventsList = [
  {
    id: 1,
    favourite: true,
    icon: ImgLogo,
    title: 'WTA Events',
    matches: [
      {
        id: 1,
        time: '3:00 AM',
        set: '2nd set',
        player1: {
          icon: ImgLogo,
          score: 0,
          subscore: 2,
          name: 'Shuai Zhang',
          point: 7.5,
        },
        player2: {
          icon: ImgLogo,
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
