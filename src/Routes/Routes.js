import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import Product from 'Pages/Product/Product';
import RecentList from 'Pages/RecentList/RecentList';
import Header from '../Components/header';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/recentList" component={RecentList}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
