import { Link } from 'react-router-dom';
import '../styles/containers/NavBar.scss';

// custom components
import Anchor from '../components/Anchor';

// short components
const MenuItem = ({ link = '', label = '' }) => {
  return (
    <li>
      <Anchor link={link} label={label} />
    </li>
  );
};

function NavBar() {
  return (
    <header>
      <nav className={`NavBar__Container`}>
        <Link to="/">
          <h2>Blog de Papus</h2>
        </Link>
        <ul>
          <MenuItem link="http://google.com/" label="Google" />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
