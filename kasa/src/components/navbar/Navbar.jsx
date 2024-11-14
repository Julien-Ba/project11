import './navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className={currentRoute === '/' ? 'nav-list-item-active' : 'nav-list-item'}>
                    <Link to='/'>Accueil</Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav-list-item-active' : 'nav-list-item'}>
                    <Link to='/about'>A propos</Link>
                </li>
            </ul>
        </nav>
    );
}
