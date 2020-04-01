import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: RouteCOmponent, isAut, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!isAut ? (
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
        isAut: state.authReducers.signUpReducers.signUpReducer.isAut
    }
}
export default connect(mapStateToProps)(PrivateRoute)