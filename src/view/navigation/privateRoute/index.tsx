import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: RouteCOmponent, currentUser, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteCOmponent {...routeProps} />
                ) : (
                        <Redirect to={"/login"} />
                    )
            }
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        currentUser: state.authReducers.currentUser
    }
}
export default connect(mapStateToProps)(PrivateRoute)