import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import ModalSwitch from './view/navigation';

export default class AppContainer extends Component {

    render() {
        return (
            // <HashRouter basename="/">
                <Router>
                    <ModalSwitch />
                </Router>
            // </HashRouter>
        )
    }
}
