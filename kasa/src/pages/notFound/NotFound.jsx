import './notFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='notfound'>
            <h1 className='error'>404</h1>
            <h2 className='description'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='home-link'>
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}
