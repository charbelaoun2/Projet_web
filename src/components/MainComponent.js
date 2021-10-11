import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DONATIONS } from '../shared/donations';

import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import AboutUs from './AboutUsComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      donations: DONATIONS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              donation={this.state.donations.filter((donation) => donation.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu donations={this.state.donations} />} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/AboutUs' component={AboutUs} />

          <Redirect to="/home" />
        </Switch>
        <Footer/>     
      </div>
    );
  }
}

export default Main;