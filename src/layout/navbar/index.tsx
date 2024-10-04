import { NavLink } from 'react-router-dom';
import ImgFavouriteStar from '@assets/images/favorite-star-svgrepo-com.svg';
import ImgHome from '@assets/images/home.svg';
import ImgBerry from '@assets/images/berry.svg';
import ImgChat from '@assets/images/chat.svg';
import ImgCasino from '@assets/images/casino.svg';
const menus = [
  { label: 'Sports', link: '/', icon: ImgHome },
  { label: 'Favourites', link: '/favourites', icon: ImgFavouriteStar },
  { label: 'AI', link: '/ai', icon: ImgBerry },
  { label: 'Betslip', link: '/betslip', icon: ImgChat },
  { label: 'MyBets', link: '/my-bets', icon: ImgCasino },
];

function Navbar() {
  return (
    <nav className="bg-grey-200 h-[70px] min-h-[70px]">
      <ul className="h-full flex justify-between items-center">
        {menus.map((item) => (
          <li key={item.icon} className="w-[90px]">
            <NavLink className="flex flex-col items-center justify-center py-[5px] navbar" to={item.link}>
              <img src={item.icon} alt={item.label} className="w-[24px]" />
              <span className="text-[12px] roboto-bold mt-[8px]">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
