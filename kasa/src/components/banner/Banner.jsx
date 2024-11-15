import './banner.scss';
import { useLocation } from 'react-router-dom';

export default function Banner() {
    const location = useLocation();
    const route = location.pathname === '/' ? 'home' : 'about';

    return (
        <section className={`hero hero-${route}`}>
            <div className='hero-filter'></div>
            <h1 className='hero-title'>Chez vous, partout et ailleurs</h1>
        </section>
    );
}
