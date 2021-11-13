import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Contact from "./ContactComponent";
import Menu from "./MenuComponent";

import { useHistory, Redirect, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleLogin(path) {
    // alert("Username: " + this.username.value + " Password: " + this.password.value
    //     + " Remember: " + this.remember.checked);
    if (this.username.value == "admin" && this.password.value == "admin") {
      this.props.history.push(path);
    } else {
      alert("");
    }

    //<Link to="/Menu" className="btn btn-primary btn-home"></Link>
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-navbar" dark expand="md">
          <div className="navbar-container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto navbar-logo" href="/">
              OperationMC <i className="fab fa-typo3" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    <span className=""></span> Home
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/aboutus">
                    <span className=""></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/menu">
                    <span className=""></span> Donations
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/contactus">
                    <span className=""></span> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> LogIn
              </Button>
            </NavItem>
          </Nav>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button
                type="submit"
                value="submit"
                color="primary"
                onClick={() => this.handleLogin("/Admin")}
              >
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Header);
