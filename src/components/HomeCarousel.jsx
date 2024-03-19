import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useEffect } from 'react';
import items from '../data/fantasy.json';

const HomeCarousel = () => {
    const [bookIndex, setBookIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBookIndex((prevIndex) => (prevIndex + 1) % 6);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const books = items.slice(0, 6);

    return (
        <Carousel
            style = {{width:"100%",height:"30%"}}>
            {books.map((book, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={book.img}
                        alt={book.title}
                        style={{ maxWidth: '100%', height: '50%'}}
                    />
                    <Carousel.Caption>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HomeCarousel;
