import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const TeamMember = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-12 overflow-x-hidden">
                <div className="section-title text-center mb-14">
                    <h2 className='text-5xl capitalize font-semibold'>Our Team Members</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="single-team-box shadow-lg p-5 mb-6 md:mb-0" data-aos="fade-right" data-aos-duration="2000">
                        <img className='mx-auto' src="https://i.ibb.co/BGPx4x2/team3.png" alt="team" />
                        <div className="team-inner-box text-center">
                            <h4 className='text-2xl font-semibold mt-5'>Maxwell Gomes</h4>
                            <p className='text-red-500 font-semibold my-2'>Founder</p>
                            <div className="team-social flex justify-center my-4">
                                <FaFacebook className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaFacebook>
                                <FaInstagram className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaInstagram>
                                <FaWhatsapp className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaWhatsapp>
                                <FaYoutube className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaYoutube>
                            </div>
                        </div>
                    </div>
                    <div className="single-team-box shadow-lg p-5 mb-6 md:mb-0" data-aos="zoom-in-up" data-aos-duration="2000">
                        <img className='mx-auto' src="https://i.ibb.co/F7DGtjC/team1.png" alt="team" />
                        <div className="team-inner-box text-center">
                            <h4 className='text-2xl font-semibold mt-5'>Monali Sinha</h4>
                            <p className='text-red-500 font-semibold my-2'>CEO</p>
                            <div className="team-social flex justify-center my-4">
                                <FaFacebook className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaFacebook>
                                <FaInstagram className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaInstagram>
                                <FaWhatsapp className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaWhatsapp>
                                <FaYoutube className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaYoutube>
                            </div>
                        </div>
                    </div>
                    <div className="single-team-box shadow-lg p-5 mb-6 md:mb-0" data-aos="zoom-in" data-aos-duration="2000">
                        <img className='mx-auto' src="https://i.ibb.co/qsHXQMh/team4.png" alt="team" />
                        <div className="team-inner-box text-center">
                            <h4 className='text-2xl font-semibold mt-5'>Alexa Mick</h4>
                            <p className='text-red-500 font-semibold my-2'>Digital Marketer</p>
                            <div className="team-social flex justify-center my-4">
                                <FaFacebook className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaFacebook>
                                <FaInstagram className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaInstagram>
                                <FaWhatsapp className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaWhatsapp>
                                <FaYoutube className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaYoutube>
                            </div>
                        </div>
                    </div>
                    <div className="single-team-box shadow-lg p-5 mb-6 md:mb-0" data-aos="fade-left" data-aos-duration="2000">
                        <img className='mx-auto' src="https://i.ibb.co/XF0tNVC/team2.png" alt="team" />
                        <div className="team-inner-box text-center">
                            <h4 className='text-2xl font-semibold mt-5'>Ariana Grande</h4>
                            <p className='text-red-500 font-semibold my-2'>Accountant Officer</p>
                            <div className="team-social flex justify-center my-4">
                                <FaFacebook className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaFacebook>
                                <FaInstagram className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaInstagram>
                                <FaWhatsapp className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaWhatsapp>
                                <FaYoutube className='mr-5 text-2xl cursor-pointer text-red-500 transform hover:scale-150 duration-300 transition-all'></FaYoutube>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;