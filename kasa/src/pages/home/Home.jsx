import './home.scss';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

export default function Home() {
    return (
        <div className='home'>
            <Banner title='Chez vous, partout et ailleurs' />
            <Gallery />
        </div>
    );
}
