import './accommodation.scss';
import { useParams, Navigate } from 'react-router-dom';
import { useAccommodations } from '../../hooks/useAccommodations';
import Carousel from '../../components/carousel/Carousel';

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
            <h1 className='accommodation-title'>{accommodation.title}</h1>
        </div>
    );
}
