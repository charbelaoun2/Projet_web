import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpen1: false,
          
        
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
      
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);

       
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    toggleModal1() {
        this.setState({
            isModalOpen1: !this.state.isModalOpen1
        });
    }
  

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }
    handleSignup(event) {
        this.toggleModal1();
        this.props.signupUser({firstname:this.firstname.value,lastname:this.lastname.value,email:this.email.value,tel:this.tel.value,username: this.username.value, password: this.password.value});
        event.preventDefault();

    }
   
    

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return(
            <React.Fragment  className=" navbar-inverse navbar-expand react-freagment">
                <Navbar dark expand="md">
                    <div className="container ss">
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavbarBrand className="mr-auto" href="/">
                            <NavLink exact to="/" className="nav-logo"> OperationMC <i className='fab fa-typo3' /> </NavLink>
                        </NavbarBrand>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        Donations
                                    </NavLink>
                                </NavItem>
                               
                            </Nav>
                            <Nav className="login">
                                <NavItem >
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline onClick={this.toggleModal} >
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                       
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                            <Nav className="signup">
                                <NavItem >
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline onClick={this.toggleModal1} >
                                            <span className="fa fa-sign-in fa-lg"></span> Register
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                       
                                        
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                           
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>
                    <ModalHeader toggle={this.toggleModal1}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                        <FormGroup>
                                <Label htmlFor="firstname">firstname</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">lastname</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">email</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="tel">tel</Label>
                                <Input type="number" id="tel" name="tel"
                                    innerRef={(input) => this.tel = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                           
                            <Button type="submit" value="submit" color="primary">Register</Button>
                        
                           
                        </Form>
                    </ModalBody>
                </Modal>


            </React.Fragment>
            


            
        );
    }
}

export default Header;