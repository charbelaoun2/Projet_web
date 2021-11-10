import React, { Component } from "react";
import Menu from "./MenuComponent";
import DonationDetail from "./DonationDetailComponent";
import { DONATIONS } from "../shared/donations";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Donate from "./Donate";
import Header from "./HeaderComponent";
import AboutUs from "./AboutUsComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: DONATIONS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  onDonationSelect(donationid) {
    this.setState({
      selectedDonation: donationid,
    });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          donation={
            this.state.donations.filter((donation) => donation.featured)[0]
          }
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DonationWithId = ({ match }) => {
      return (
        <DonationDetail
          donation={
            this.props.donations.donations.filter(
              (donation) =>
                donation.id === parseInt(match.params.donationId, 10)
            )[0]
          }
          isLoading={this.props.donations.isLoading}
          errMess={this.props.donations.errMess}
          comments={this.props.comments.filter(
            (comment) =>
              comment.donationId === parseInt(match.params.donationId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/menu"
            component={() => <Menu donations={this.state.donations} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/AboutUs" component={AboutUs} />

          <Route exact path="/Donate" component={Donate} />
          <Route path="/" component={HomePage} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
