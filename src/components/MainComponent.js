import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import AboutUs from './AboutUsComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    donations: state.donations,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  
  

  onDonationSelect(donationid){
    this.setState({
        selectedDonation : donationid
    })
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          donation={this.props.donations.filter((donation) => donation.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <AboutUs leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu donations={this.props.donations} />} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>     
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));