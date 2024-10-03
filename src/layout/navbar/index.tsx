import { NavLink } from 'react-router-dom';

const menus = [
  { label: 'Sports', link: '/', icon: 'home' },
  { label: 'AI', link: '/ai', icon: 'berry' },
  { label: 'Betslip', link: '/betslip', icon: 'chat' },
  { label: 'MyBets', link: '/my-bets', icon: 'casino' },
];

function Navbar() {
  return (
    <nav className="bg-grey-100 h-[70px]">
      <ul className="h-full flex justify-between items-center">
        {menus.map((item) => (
          <li key={item.icon} className="w-[90px]">
            <NavLink className="flex flex-col items-center justify-center py-[5px] navbar" to={item.link}>
              <img src={`svgs/${item.icon}.svg`} alt={item.label} />
              <span className="text-[12px] roboto-bold mt-[8px]">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
