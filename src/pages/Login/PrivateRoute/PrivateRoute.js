import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase()
    if (isLoading) {
        return <div>
            <h2 className='text-4xl text-red-500 text-center font-medium pt-30'>Loading...</h2>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;