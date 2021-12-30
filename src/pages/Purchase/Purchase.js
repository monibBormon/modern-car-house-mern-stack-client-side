import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const Purchase = () => {
    const [product, setProduct] = useState({})
    const { user } = useAuth()
    const { id } = useParams();
    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://salty-beyond-08378.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    // buy now
    const onSubmit = data => {
        data.title = product.name
        data.price = product.price
        data.status = 'pending'
        fetch('https://salty-beyond-08378.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    history.push(`/payment-method/${data.insertedId}`)
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap-4">
                    <div className="car-details">
                        <img src={product.img} alt="" />
                        <h3 className='text-4xl capitalize font-semibold my-5'>{product.name}</h3>
                        <p className='font-semibold text-xl'>Price <span className='text-red-500'>${product.price}</span></p>
                        <p className='font-semibold'>The car has <span className='text-red-500'>{product.cc}cc</span> power.</p>
                        <p className='text-lg mt-5'>{product.body}</p>
                    </div>
                    <div className="puchase-info-form">
                        <h2 className='text-4xl capitalize font-semibold mb-10 text-center'>Fill up the form to buy</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("name")} placeholder='Your Name' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' defaultValue={user.email} {...register("email", { required: true })} placeholder='Email' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("address")} placeholder='Your Address' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("city")} placeholder='City' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("phone")} type='number' placeholder='Your Phone Number' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='border-2 border-red-400 px-14 font-semibold text-xl cursor-pointer rounded-full bg-white mx-auto block text-red-400 py-2' type="submit" value='Continue Payment' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;