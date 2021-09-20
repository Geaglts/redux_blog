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
    <nav className={`NavBar__Container`}>
      <h2>Blog de Papus</h2>
      <ul>
        <MenuItem link="http://google.com/" label="Google" />
      </ul>
    </nav>
  );
}

export default NavBar;
