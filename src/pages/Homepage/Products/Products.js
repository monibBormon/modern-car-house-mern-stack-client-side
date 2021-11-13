import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { name, price, cc, type, year, img, _id } = product;
    return (
        <div className="single-best-selling-car-box shadow duration-300 transition-all hover:shadow-xl overflow-hidden rounded mb-5">
            <img className='transform hover:scale-110 transition-all duration-300 max-w-full ' src={img} style={{ height: '280px' }} alt="" />
            <div className="car-info-box p-5 text-center">
                <Link to={`/car-details/${_id}`}>
                    <h2 className='text-3xl mb-3 font-semibold capitalize'>{name}</h2>
                </Link>
                <p className='text-2xl font-semibold text-red-500 mb-3'>${price}</p>
                <h4 className='font-semibold'>{cc}cc</h4>
                <p className='font-semibold'>Type - {type}</p>
                <h4 className='font-semibold'>Publish Year - {year}</h4>
                <Link to={`/car-details/${_id}`}>
                    <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mb-5 text-white font-medium px-8 py-2 mt-5 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500'>Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;