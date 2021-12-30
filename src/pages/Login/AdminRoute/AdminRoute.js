import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useFirebase()
    console.log(user.email, admin)
    if (!admin) {
        return <div>
            <h2 className='text-4xl text-red-500 text-center font-medium pt-30'>Loading...</h2>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: '/',
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;