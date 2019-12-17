import React from 'react'
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";


import HomePage from '../modules/explore/homePage/homePage';
import ProductPage from '../modules/explore/productPage/ProductPage';
import LoginPage from '../modules/explore/loginPage/LoginPage';
import TestEpic from '../modules/explore/testEpic/TestEpic';


export default function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <Switch location={background || location}>
            {/* <Route exact path="/" children={<LoginPage />} /> */}
            <Route exact path="/" children={<TestEpic />} />
            <Route path="/home" children={<HomePage />} />
        </Switch>
    );
}
