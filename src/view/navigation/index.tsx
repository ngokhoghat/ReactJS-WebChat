import React from 'react'
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import HomePage from '../modules/explore/homePage';
import LoginPage from '../modules/explore/auth/loginPage';
import SignUpPage from '../modules/explore/auth/registerPage';
import PrivateRoute from './privateRoute';
import NotFoundPage from '../modules/explore/404notFoudPage';
import ChatPage from '../modules/explore/chatPage';

export default function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={1000}
                >
                    <Switch location={background || location}>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <PrivateRoute exact path="/chat" component={ChatPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignUpPage} />
                        <Route exact path="*" component={NotFoundPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}
        />
    );
}
