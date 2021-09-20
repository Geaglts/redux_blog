import '../styles/containers/NavBar.scss';

function NavBar() {
  return (
    <nav className={`NavBar__Container`}>
      <h2>Blog de Papus</h2>
      <ul>
        <li>
          <a href="http://google.com/" target="_blank">
            Google
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
