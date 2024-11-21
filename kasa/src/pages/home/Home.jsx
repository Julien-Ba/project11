import './home.scss';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

export default function Home() {
    const titleString = 'Chez vous, partout et ailleurs';

    return (
        <div className='home'>
            <Banner title={titleString} />
            <Gallery />
        </div>
    );
}
