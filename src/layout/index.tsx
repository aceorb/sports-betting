import { Outlet } from 'react-router-dom';
import Topbar from '@/layout/topbar';
import Navbar from '@/layout/navbar';

function Layout() {
  return (
    <div className="h-full flex flex-col bg-grey-100">
      <Topbar />
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}

export default Layout;
