import React from 'react';

const Brand = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="brand-box">
                        <img className='mx-auto max-w-full' src="https://i.ibb.co/BfrHhTg/brand-4.png" alt="" />
                    </div>
                    <div className="brand-box">
                        <img className='mx-auto max-w-full' src="https://i.ibb.co/s3zGSdX/brand-1.png" alt="" />
                    </div>
                    <div className="brand-box">
                        <img className='mx-auto max-w-full' src="https://i.ibb.co/b3nxfn7/brand-2.png" alt="" />
                    </div>
                    <div className="brand-box">
                        <img className='mx-auto max-w-full' src="https://i.ibb.co/pn31Ky7/brand-3.png" alt="" />
                    </div>
                    <div className="brand-box">
                        <img className='mx-auto max-w-full' src="https://i.ibb.co/7g10fM5/brand-5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;