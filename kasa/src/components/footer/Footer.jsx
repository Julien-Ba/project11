import './footer.scss';
import logo from '../../assets/logo.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='logo kasa' className='logo' />
            <div className='copyright'>
                <span>© 2020 Kasa. All</span>
                <span>rights reserved</span>
            </div>
        </footer>
    );
}
