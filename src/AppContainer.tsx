import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import ModalSwitch from './view/navigation';

export default class AppContainer extends Component {

    render() {
        return (
            <Router basename="/">
                <ModalSwitch />
            </Router>
        )
    }
}
