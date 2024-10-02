import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Sports</Link>
        </li>
        <li>
          <Link to="/">Favorite</Link>
        </li>
        <li>
          <Link to="/">AI</Link>
        </li>
        <li>
          <Link to="/">Betslip</Link>
        </li>
        <li>
          <Link to="/">My Bets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
