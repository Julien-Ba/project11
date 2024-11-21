import './gallery.scss';
import '../card/Card';
import Card from '../card/Card';

export default function Gallery({ accommodations }) {
    return (
        <section className='gallery'>
            {accommodations.map((accommodation) => (
                <Card accommodation={accommodation} />
            ))}
        </section>
    );
}
