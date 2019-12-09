import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductPage from './view/modules/explore/productPage/ProductPage';
import HomePage from './view/modules/explore/homePage/homePage';

export default class AppContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/product">
                            <ProductPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
