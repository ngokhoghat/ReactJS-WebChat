import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const App = ({ currentUser, children }: any) => {
    if (!currentUser) {
        return <Redirect to={"/login"} />
    } else {
        return (
            <div className="Home">
                {children}
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        currentUser: state.authReducers.currentUser
    }
}
export default connect(mapStateToProps)(App)