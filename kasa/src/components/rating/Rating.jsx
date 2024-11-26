import './rating.scss';

export default function Rating({ rating = '0' }) {
    const stars = Array(5)
        .fill(null)
        .map((_, index) => {
            const color = index < Number(rating) ? 'colored' : 'grey';
            return <i key={index} className={`fa-solid fa-star rating__star rating__star--${color}`}></i>;
        });

    return <div className='rating'>{stars}</div>;
}
