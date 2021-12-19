import React from 'react'
import { Navigate  } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({element: Element, AuthReducer, children, ...rest}) => {
    return (
        !AuthReducer.isAuthenticated
            ? (<Navigate  to="/" />)
            : (children)
    );
}

const StateProps = state => ({
    AuthReducer: state.AuthReducer
})

export default connect(StateProps)(PrivateRoute) ;