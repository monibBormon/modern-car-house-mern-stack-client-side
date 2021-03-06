import React from 'react';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


// const user = {
//     name: 'Tom Cook',
//     email: 'tom@example.com',
//     imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
const Header = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-2 gap-4 items-center py-5">
                                    <div className="flex-shrink-0">
                                        <Link to='/'>
                                            <h2 className='text-red-400 font-semibold text-2xl capitalize'>mch  <span className='text-yellow-400'>Cars</span></h2>
                                        </Link>
                                    </div>
                                    <div className="hidden md:block text-right">
                                        <div className="ml-10 space-x-4">
                                            <NavLink exact activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300' to='/'>Home</NavLink>
                                            <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300' to='/explore-cars'>Explore Cars</NavLink>
                                            <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300' to='/about'>About Us</NavLink>
                                            {
                                                user.email ? <div className='inline-block'>
                                                    <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300' to='/dashboard'>Dashboard</NavLink>
                                                </div> :
                                                    <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300' to='/login'>Login</NavLink>
                                            }
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex justify-end md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <NavLink exact activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300 block' to='/'>Home</NavLink>
                                    <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300 block' to='/explore-cars'>Explore Cars</NavLink>
                                    <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300 block' to='/about'>About Us</NavLink>
                                    {
                                        user.email ? <div className='inline-block'>
                                            <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300 block' to='/dashboard'>Dashboard</NavLink>
                                        </div> :
                                            <NavLink activeClassName='active' className='text-white font-semibold hover:text-red-400 duration-300 block' to='/login'>Login</NavLink>
                                    }
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div >
    );
};

export default Header;