import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <h1>Sports Betting</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
