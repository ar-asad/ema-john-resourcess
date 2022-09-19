import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCarts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddtocart = (product) => {
        const newCart = [...cart, product];
        setCarts(newCart);
    }


    return (
        <div className=' grid grid-cols-12' >
            <div className=" products-container col-start-1 col-end-10  grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddtocart={handleAddtocart}
                    ></Product>)
                }
            </div>
            <div className="cart-container col-start-10 col-end-13 bg-orange-300 p-3 relative ">
                <div className='fixed'>
                    <h3>Order Summary</h3>
                    <p>Selected Items:{cart.length}</p>
                    <p>Total Price:$</p>
                    <p>Total Shiping Charge:$</p>
                    <p>Tax:$</p>
                    <h4>Grand Total:$</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;