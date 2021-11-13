import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const Review = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const handleRating = () => {
        alert('Rating Added Succsfully.')
    }
    return (
        <div>
            <h2 className='text-4xl mb-5'>Review Our Service</h2>
            <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return <label key={i}>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar color={ratingValue <= (hover || rating) ? '#ffc107' : 'e4e5e9'} className='star inline-block text-4xl' onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}></FaStar>
                    </label>
                })}
            </div>
            <textarea className='border-2 w-1/2 h-16 border-red-400 pl-2 pt-2 mt-3 rounded-lg' name="rating" cols="30" rows="5" placeholder='Give your feedback'></textarea><br />
            <button onClick={handleRating} className='border-2 border-red-400 rounded-full px-5 py-1 font-semibold'>Submit Rating</button>
        </div>
    );
};

export default Review;