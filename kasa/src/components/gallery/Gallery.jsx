import './gallery.scss';
import Card from '../card/Card';

export default function Gallery({ accommodations }) {
    return (
        <section className='gallery'>
            {accommodations.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </section>
    );
}
