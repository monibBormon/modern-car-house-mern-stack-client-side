import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Products from '../Homepage/Products/Products';

const ExploreCars = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const size = 9;

    useEffect(() => {
        fetch(`https://modern-car-house-mern-stack-server-side.vercel.app/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
    return (
        <>
            {
                isLoading ? <h2 className='text-4xl text-red-500 text-center font-medium pt-30'>Loading...</h2> :
                    <div>
                        < div className='bg-gray-700 bg-opacity-95 bg-blend-overlay flex items-center justify-center' style={{ backgroundImage: 'url(https://image.freepik.com/free-photo/car-travelling-by-sunny-road_1088-51.jpg)', width: '100%', height: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }
                        }>
                            <h2 className='md:text-6xl text-5xl px-5 text-center py-10  text-white font-semibold'>Explore Our Car Collections</h2>
                        </div >
                        <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {
                                    products?.length === 0 && <div>Loading..</div>
                                }
                                {
                                    products?.map(product => <Products key={product._id} product={product}></Products>)
                                }
                            </div>
                            <div className="pagination">
                                {
                                    [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={number === page ? 'bg-red-500 border-2 border-red-500 text-white text-2xl px-2 mr-2 mt-16 rounded font-semibold' : 'border-2 px-2 mr-2 mt-16 border-red-500 text-xl rounded font-semibold'}>{number + 1}</button>)
                                }
                            </div>
                        </div>
                    </div >
            }
        </>
    );

};

export default ExploreCars;