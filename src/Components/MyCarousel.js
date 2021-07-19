import React from 'react'
import 'Components/MyCarousel.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { render } from '@testing-library/react';

export default function MyCarousel({video, imageList}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                imageList.map((image) => (
                    <Carousel.Item>
                        <img src={image} class="d-block w-100" alt="" />
                    </Carousel.Item>
                ))
            }

        </Carousel>

        </>
    )
}
