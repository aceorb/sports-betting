import Navbar from '@/layout/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import Topbar from '@/layout/topbar/Topbar.tsx';

function Layout() {
  return (
    <div className="h-full flex flex-col">
      <Topbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}

export default Layout;
