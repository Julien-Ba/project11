import './card.scss';
import { Link } from 'react-router-dom';

export default function Card({ accommodation }) {
    return (
        <Link to={`/accommodation/${accommodation.id}`}>
            <article className='card'>
                <img src={accommodation.cover} alt={accommodation.title} className='card-img' />
                <h2 className='card-title'>{accommodation.title}</h2>
            </article>
        </Link>
    );
}