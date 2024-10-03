import { Link } from 'react-router-dom';

const menus = [
  { label: 'Home', link: '/', icon: 'home' },
  { label: 'AI', link: '/ai', icon: 'berry' },
  { label: 'Betslip', link: '/betslip', icon: 'chat' },
  { label: 'MyBets', link: '/mybets', icon: 'casino' },
];

function Navbar() {
  return (
    <nav className="bg-grey-100 h-[70px]">
      <ul className="h-full flex justify-between items-center">
        {menus.map((item) => (
          <li key={item.icon} className="w-[90px]">
            <Link className="flex flex-col items-center justify-center py-[5px]" to="/">
              <img src={`svgs/${item.icon}.svg`} alt={item.label} />
              <span className="text-grey-400 text-[12px] roboto-bold mt-[10px]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
