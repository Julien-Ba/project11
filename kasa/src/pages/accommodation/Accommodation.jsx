import './accommodation.scss';
import { useParams, Navigate } from 'react-router-dom';
import { useAccommodations } from '../../hooks/useAccommodations';
import Carousel from '../../components/carousel/Carousel';
import Dropdown from '../../components/dropdown/Dropdown';
import Rating from '../../components/rating/Rating';

export default function Accommodation() {
    const { accommodations, loading, error } = useAccommodations();
    const { id } = useParams();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data!</div>;

    const accommodation = accommodations.find((acc) => acc.id === id);

    if (!accommodation) {
        return <Navigate to='/404' replace />;
    }

    return (
        <div className='accommodation'>
            <Carousel images={accommodation.pictures} />
            <div className='accommodation__header'>
                <h1 className='accommodation__header-title'>{accommodation.title}</h1>
                <h2 className='accommodation__header-location'>{accommodation.location}</h2>
            </div>
            <div className='accommodation__host'>
                <h3 className='accommodation__host-name'>{accommodation.host.name}</h3>
                <img
                    src={accommodation.host.picture}
                    alt={`${accommodation.host.name}`}
                    className='accommodation__host-image'
                />
            </div>
            <ul className='accommodation__tags'>
                {accommodation.tags.map((tag) => (
                    <li key={tag} className='accommodation__tags-item'>
                        {tag}
                    </li>
                ))}
            </ul>
            <Rating rating={accommodation.rating} />
            <div className='accommodation__dropdowns'>
                <Dropdown title='Description' content={accommodation.description} />
                <Dropdown title='Équipements' content={accommodation.equipments} />
            </div>
        </div>
    );
}
