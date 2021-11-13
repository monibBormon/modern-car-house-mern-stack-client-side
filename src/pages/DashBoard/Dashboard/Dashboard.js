import React from 'react';
import { Switch, Route, Link, NavLink, useRouteMatch } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './Dashboard.css'
import Review from './Review/Review';

const Dashboard = () => {
    const { admin, logOut } = useAuth()
    console.log(admin);
    const handleLogOut = () => {
        const confirmLogOut = window.confirm('Are you sure you want to log out?')
        if (confirmLogOut) {
            logOut()
        }
    }
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <ul className='lg:mt-8 mt-0 text-center lg:text-left'>
                        <li>
                            {admin ? <div><NavLink exact activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard`}>Manage Orders</NavLink>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard/manage-all-products`}>Manage Products</NavLink>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard/add-product`}>Add Product</NavLink>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard/make-admin`}>Make Admin</NavLink>
                                <button className='font-semibold underline' onClick={handleLogOut}>Log Out</button>
                            </div> :
                                <div>
                                    <NavLink exact activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard`}>My Orders</NavLink>
                                    <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard/review`}>Review</NavLink>
                                    <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`/dashboard/payment`}>Payment</NavLink>
                                    <button className='font-semibold underline' onClick={handleLogOut}>Log Out</button>
                                </div>
                            }
                        </li>
                    </ul>
                    <div className='col-span-6'>
                        <Switch>
                            {admin ? <div>
                                <Route exact path={`/dashboard`}>
                                    <ManageOrders></ManageOrders>
                                </Route>
                                <Route path={`/dashboard/manage-all-products`}>
                                    <ManageProducts></ManageProducts>
                                </Route>
                                <Route path={`/dashboard/add-product`}>
                                    <AddProduct></AddProduct>
                                </Route>
                                <Route path={`/dashboard/make-admin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                            </div> :
                                <div>
                                    <Route exact path={`/dashboard`}>
                                        <MyOrders></MyOrders>
                                    </Route>
                                    <Route path={`/dashboard/review`}>
                                        <Review></Review>
                                    </Route>
                                    <Route path={`/dashboard/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                </div>
                            }

                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;