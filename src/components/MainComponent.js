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
import { fetchDonations } from "../redux/ActionCreators";
import { postComment,deleteComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders, loginUser, logoutUser, fetchFavorites, postFavorite, deleteFavorite } from '../redux/ActionCreators';

import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const mapStateToProps = (state) => {
  return {
    donations: state.donations,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    auth: state.auth
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   postComment: (donationId, rating, comment) => dispatch(postComment(donationId, rating, comment)),
//   fetchDonations: () => {dispatch(fetchDonations())},
  
//   fetchComments: () => {dispatch(fetchComments())},
  
//   loginUser: (creds) => dispatch(loginUser(creds)),
//   logoutUser: () => dispatch(logoutUser()),
  
// });

const mapDispatchToProps = (dispatch) => ({
  
  postComment: (donationId, rating,comment,file) => dispatch(postComment(donationId, rating,comment,file)),
  deleteComment: (donationId, rating,comment,file) => dispatch(deleteComment(donationId, rating,comment,file)),
  fetchDonations: () => {dispatch(fetchDonations())},
  
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => dispatch(fetchLeaders()),
  
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
 
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchDonations();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    
  }

  render() {
    // const HomePage = () => {
      
    //     <Home 
    //     promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
       
    //     leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
    //     leaderLoading={this.props.leaders.isLoading}
    //     leaderErrMess={this.props.leaders.errMess}
        
        
    //   />
      
      
    // };

    const DonationWithId = ({ match }) => {
      return (
        //this.props.auth.isAuthenticated
        //?
        <DonationDetail donation={this.props.donations.donations.filter((donation) => donation._id === match.params.donationId)[0]}
        isLoading={this.props.donations.isLoading}
        errMess={this.props.donations.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.donation === match.params.donationId)}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        deleteComment={this.props.deleteComment}

        
        />
      );
    };
   
  

    
    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
           />
        <div>
          <Switch>
            <Route path="/home" component={() => <Home leaders={this.props.leaders} />} />
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