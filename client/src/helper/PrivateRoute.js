import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { token } from './variable'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
    {...rest}
    render={props =>  token ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
            pathname: "/login"
        }}
        />
    )
    }
    />

)
export default PrivateRoute;
