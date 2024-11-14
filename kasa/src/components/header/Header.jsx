import './header.scss';
import logo from '../../assets/logo.svg';
import Navbar from '../navbar/Navbar';

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='logo kasa' className='logo' />
            <Navbar />
        </header>
    );
}
