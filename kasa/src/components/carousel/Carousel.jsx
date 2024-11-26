import './carousel.scss';
import { useState } from 'react';

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    if (!images || images.length === 0) {
        return <div>No images to display</div>;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className='carousel'>
            {/* Only show arrows and counter if there's more than one image */}
            {length > 1 && (
                <>
                    <i
                        className='fa-solid fa-chevron-left carousel__arrow carousel__arrow--left'
                        onClick={prevSlide}
                        aria-label='Previous image'
                    />
                    <i
                        className='fa-solid fa-chevron-right carousel__arrow carousel__arrow--right'
                        onClick={nextSlide}
                        aria-label='Next image'
                    />
                    <div className='carousel__counter'>
                        {current + 1}/{length}
                    </div>
                </>
            )}
            <img src={images[current]} alt={`Slide ${current + 1}`} className='carousel__image' />
        </section>
    );
}
