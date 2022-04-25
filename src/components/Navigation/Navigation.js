import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/superheros"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      SuperherosList
    </NavLink>
    {/* <NavLink
      to="/superheros/:superheroId"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      AboutSuperhero
    </NavLink> */}
  </nav>
);

export default Navigation;
