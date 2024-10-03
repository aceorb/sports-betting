import { Link } from 'react-router-dom';
import WalletConnect from '@/layout/topbar/WalletConnect.tsx';
import SideMenu from '@/layout/topbar/SideMenu.tsx';

function Topbar() {
  return (
    <nav className="h-[56px] flex justify-between items-center px-[16px]">
      <Link to="/" className="flex items-center">
        <img src="/svgs/logo.svg" alt="Gamehub" />
      </Link>
      <div className="flex">
        <WalletConnect />
        <SideMenu />
      </div>
    </nav>
  );
}

export default Topbar;
