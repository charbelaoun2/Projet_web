import React, { Component } from "react";
import Menu from "./MenuComponent";
import DonationDetail from "./DonationDetailComponent";
import AboutUs from "./AboutUsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Admin from './AdminComponent'
import Home from "./HomeComponent";
import Donate from "./Donate";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDonations } from "../redux/ActionCreators";
import {  postOffre,deleteOffre, fetchoffres,fetchusers, fetchLeaders, loginUser,signupUser, logoutUser} from '../redux/ActionCreators';


const mapStateToProps = (state) => {
  return {
    donations: state.donations,
    offres: state.offres,
    leaders: state.leaders,
    users:state.users,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  
  postOffre: (donationId, rating,comment,file) => dispatch( postOffre(donationId, rating,comment,file)),
  deleteOffre: (offreId) => dispatch(deleteOffre(offreId)),
  fetchDonations: () => {dispatch(fetchDonations())},
  fetchusers: () => {dispatch(fetchusers())},
  
  fetchoffres: () => {dispatch(fetchoffres())},
  fetchLeaders: () => dispatch(fetchLeaders()),
  
  loginUser: (creds) => dispatch(loginUser(creds)),
  signupUser:(creds)=> dispatch(signupUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
 
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchDonations();
    this.props.fetchoffres();
    this.props.fetchLeaders();
    this.props.fetchusers();
    
  }

  render() {

    const DonationWithId = ({ match }) => {
      return (
       
        <DonationDetail donation={this.props.donations.donations.filter((donation) => donation._id === match.params.donationId)[0]}
        isLoading={this.props.donations.isLoading}
        errMess={this.props.donations.errMess}
        offres={this.props.offres.offres.filter((offre) => offre.donation === match.params.donationId)}
        offresErrMess={this.props.offres.errMess}
        postOffre={this.props. postOffre}
        deleteOffre={this.props.deleteOffre}
        
        

        
        />
      );
    };
   
  

    
    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          signupUser={this.props.signUpuser}
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
          
            <Route exact path="/Donate" component={()=> <Donate donations={this.props.donations.donations} />} />
            <Route path="/admin"  component={() => <Admin  users={this.props.users} />}/>

            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));