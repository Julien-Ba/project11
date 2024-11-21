import './home.scss';
import { useAccommodations } from '../../hooks/useAccommodations';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

export default function Home() {
    const titleString = 'Chez vous, partout et ailleurs';
    const { accommodations, loading, error } = useAccommodations();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data!</div>;
    return (
        <div className='home'>
            <Banner title={titleString} />
            <Gallery accommodations={accommodations} />
        </div>
    );
}
