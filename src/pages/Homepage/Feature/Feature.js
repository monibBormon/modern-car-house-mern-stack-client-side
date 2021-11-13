import React from 'react';
import { FaRibbon, FaCarAlt, FaGift, FaEnvelope } from 'react-icons/fa'

const Feature = () => {
    return (
        <div className='py-10 border-b-2 border-t-2 border-red-200'>
            <div className="md:container md:mx-auto px-5 lg:px-0" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="single-feature flex items-center justify-center">
                        <div className="icon mr-5">
                            <FaRibbon className='text-5xl text-red-500'></FaRibbon>
                        </div>
                        <div className="feature-text">
                            <h2 className='font-semibold text-2xl md:text-3xl'>World's #1</h2>
                            <p className='capitalize'>Largest auto portal</p>
                        </div>
                    </div>
                    <div className="single-feature flex items-center justify-center">
                        <div className="icon mr-5">
                            <FaCarAlt className='text-5xl text-red-500'></FaCarAlt>
                        </div>
                        <div className="feature-text">
                            <h2 className='font-semibold text-2xl md:text-3xl'>Car Sold</h2>
                            <p className='capitalize'>Every 10 minute</p>
                        </div>
                    </div>
                    <div className="single-feature flex items-center justify-center">
                        <div className="icon mr-5">
                            <FaGift className='text-5xl text-red-500'></FaGift>
                        </div>
                        <div className="feature-text">
                            <h2 className='font-semibold text-2xl md:text-3xl'>Offers</h2>
                            <p className='capitalize'>Stay updated pay less</p>
                        </div>
                    </div>
                    <div className="single-feature flex items-center justify-center">
                        <div className="icon mr-5">
                            <FaEnvelope className='text-5xl text-red-500'></FaEnvelope>
                        </div>
                        <div className="feature-text">
                            <h2 className='font-semibold text-2xl md:text-3xl'>Compare</h2>
                            <p className='capitalize'>Choose the right car</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Feature;