import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';
import Product from 'Pages/Product';
import RecentList from 'Pages/RecentList';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/product' component={Product}></Route>
                    <Route path='/recentList' component={RecentList}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;