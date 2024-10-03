import { Outlet } from 'react-router-dom';
import Navbar from '@/layout/Navbar.tsx';
import Topbar from '@/layout/topbar';

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
