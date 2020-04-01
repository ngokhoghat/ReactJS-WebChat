import React, { useEffect } from 'react'
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import ModalSwitch from './view/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from './view/redux/actions/auth';

const AppContainer = ({ getCurrentUser }: any) => {
    useEffect(() => {
        getCurrentUser()
    }, [])
    return (
        // <HashRouter basename="/">
        <Router>
            <ModalSwitch />
        </Router>
        // </HashRouter>
    )
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getCurrentUser
    },
    dispatch,
);

export default connect(null, mapDispatchToProps)(AppContainer)