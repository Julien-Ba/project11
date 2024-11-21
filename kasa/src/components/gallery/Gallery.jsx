// Gallery.jsx

export default function Gallery({ accommodations }) {
    return (
        <section>
            {accommodations.map((accommodation) => (
                <article key={accommodation.id}>{accommodation.title}</article>
            ))}
        </section>
    );
}
