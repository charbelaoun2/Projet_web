import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo_nav2.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                        <div className="col-8 col-sm-6">
                                <img src='/assets/images/mission_header.png' className='responsive_img'></img>

                            </div>
                           
                            <div className="col-3 col-sm-6">
                                <h1 class ="jumbo_mission">Our mission</h1>
                                <p class="jumbo_mission1">As a group of individuals that hail from and some who currently live in 3rd world countries, 
                                we have witnessed the depths of poverty and this is what drives us to create change in any way we possibly
                                 can.Our organization believes wholeheartedly in creating opportunities for those who are in desperate need of it.
                                 In our opinion, poverty is only a temporary situation and those that are in that situation when given 
                                 the right opportunity can turn things around and create a new world not only for themselves but also
                                  for others that are in the same boat.Our organization is most interested in creating systems that lead
                                   to self-sustainability of these so called “underserved” populations both locally and abroad.</p>
                            </div>
                            
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;