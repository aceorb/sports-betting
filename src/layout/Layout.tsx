import Navbar from '@/layout/Navbar.tsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}

export default Layout;
