import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product, handleAddtocart }) => {
    const { img, name, seller, price, ratings
    } = product;

    return (

        <Card className='relative'>
            <Card.Img className='p-1 w-full rounded' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </Card.Body>
            <button onClick={() => handleAddtocart(product)} className='bg-orange-300 hover:bg-orange-400 rounded-b'><p className='pt-2'>Add To Cart</p></button>
        </Card>

    );
};

export default Product;