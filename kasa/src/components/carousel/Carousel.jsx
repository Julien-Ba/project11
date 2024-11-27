import './carousel.scss';
import { useState } from 'react';

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    if (!images || images.length === 0) {
        return <div>No images to display</div>;
    }

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    function renderControls() {
        //Only shows arrows and counter if there's more than one image
        if (length <= 1) return null;
        return (
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
        );
    }

    return (
        <section className='carousel'>
            {renderControls()}
            <img src={images[current]} alt={`Slide ${current + 1}`} className='carousel__image' />
        </section>
    );
}
