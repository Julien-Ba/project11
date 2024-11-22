import './footer.scss';
import logo from '../../assets/logo.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='logo kasa' className='logo' />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
