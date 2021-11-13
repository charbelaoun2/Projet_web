import React, { Component } from "react";
import Menu from "./MenuComponent";
import DonationDetail from "./DonationDetailComponent";
import AboutUs from "./AboutUsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Admin from '../Admin/AdminComponent'
//import Footer from './indexFooter';
import Home from "./HomeComponent";
import Donate from "./Donate";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchDonations, fetchComments, fetchPromos } from '../redux/ActionCreators';

import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const mapStateToProps = (state) => {
  return {
    donations: state.donations,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = dispatch => ({
  addComment: (donationId, rating, author, comment) => dispatch(addComment(donationId, rating, author, comment)),
  fetchDonations: () => { dispatch(fetchDonations())},
  //resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDonations();
    this.props.fetchComments();
    this.props.fetchPromos();
   
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          donation={
            this.props.donations.donations.filter(
              (donation) => donation.featured
            )[0]
          }
          donationsLoading={this.props.donations.isLoading}
          donationErrMess={this.props.donations.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
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
          comments={this.props.comments.comments.filter((comment) => comment.donationId === parseInt(match.params.donationId,10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route
              exact
              path="/menu"
              component={() => <Menu donations={this.props.donations} />}
            />
            <Route path="/menu/:donationId" component={DonationWithId} />
            <Route exact path="/contactus" component={Contact} />

            <Route exact path="/Donate" component={Donate} />
            <Route path="/Admin" component={Admin} />

            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));