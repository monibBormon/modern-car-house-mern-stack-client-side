import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-5 md:py-16 overflow-x-hidden">
                <div className="section-title text-center mb-14">
                    <h2 className='text-5xl capitalize font-semibold'>Our customer reviews</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="single-review text-center hover:bg-red-400 duration-300 transition-all shadow-lg hover:text-gray-900 bg-red-300 rounded-tl-3xl rounded-br-3xl px-5 py-10" data-aos="zoom-in" data-aos-duration="2000">
                        <img className='w-28 rounded-full mx-auto' src="https://i.ibb.co/dJC14nt/team4.jpg" alt="" />
                        <div className="review-text">
                            <h2 className='text-gray-800 text-2xl font-semibold my-3'>Mr. John Marma</h2>
                            <h4 className='capitalize font-semibold text-xl mb-2'>ceo, ZoomEx</h4>
                            <p className='font-medium'>i got a product that is really nice and the car is totally full of feature. their service is very good and i am pleased about their car service.</p>
                        </div>
                    </div>
                    <div className="single-review text-center hover:bg-red-400 duration-300 transition-all shadow-lg hover:text-gray-900 bg-red-300 rounded-tl-3xl rounded-br-3xl px-5 py-10" data-aos="zoom-in" data-aos-duration="2000">
                        <img className='w-28 rounded-full mx-auto' src="https://i.ibb.co/nrf248P/team3.jpg" alt="" />
                        <div className="review-text">
                            <h2 className='text-gray-800 text-2xl font-semibold my-3'>Ema Richel</h2>
                            <h4 className='capitalize font-semibold text-xl mb-2'>ceo, ZoomEx</h4>
                            <p className='font-medium'>i got a product that is really nice and the car is totally full of feature. their service is very good and i am pleased about their car service.</p>
                        </div>
                    </div>
                    <div className="single-review text-center hover:bg-red-400 duration-300 transition-all shadow-lg hover:text-gray-900 bg-red-300 rounded-tl-3xl rounded-br-3xl px-5 py-10" data-aos="zoom-in" data-aos-duration="2000">
                        <img className='w-28 rounded-full mx-auto' src="https://i.ibb.co/PW7SX3Y/team2.jpg" alt="" />
                        <div className="review-text">
                            <h2 className='text-gray-800 text-2xl font-semibold my-3'>Alex Mito</h2>
                            <h4 className='capitalize font-semibold text-xl mb-2'>ceo, ZoomEx</h4>
                            <p className='font-medium'>i got a product that is really nice and the car is totally full of feature. their service is very good and i am pleased about their car service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;