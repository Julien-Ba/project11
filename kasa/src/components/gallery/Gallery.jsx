// Gallery.jsx
import { useAccommodations } from '../../hooks/useAccommodations';

export default function Gallery() {
    const { accommodations, loading, error } = useAccommodations();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data!</div>;

    return (
        <section>
            {accommodations.map((accommodation) => (
                <article key={accommodation.id}>{accommodation.title}</article>
            ))}
        </section>
    );
}
