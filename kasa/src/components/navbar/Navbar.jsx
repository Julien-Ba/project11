import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const route = location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className={route === '/' ? 'nav__list-item--active' : 'nav__list-item'}>
                    <Link to='/'>Accueil</Link>
                </li>
                <li className={route === '/about' ? 'nav__list-item--active' : 'nav__list-item'}>
                    <Link to='/about'>A Propos</Link>
                </li>
            </ul>
        </nav>
    );
}
