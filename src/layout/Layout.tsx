import Navbar from '@/layout/Navbar.tsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="h-full flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}

export default Layout;
