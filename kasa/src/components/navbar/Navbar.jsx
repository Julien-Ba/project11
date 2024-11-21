import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const route = location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className={route === '/' ? 'nav-list-item-active' : 'nav-list-item'}>
                    <Link to='/'>Accueil</Link>
                </li>
                <li className={route === '/about' ? 'nav-list-item-active' : 'nav-list-item'}>
                    <Link to='/about'>A propos</Link>
                </li>
            </ul>
        </nav>
    );
}
