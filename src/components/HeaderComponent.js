import React, { Component, useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from './Button.js';

function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    OperationMC <i className='fab fa-typo3' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link to='/contactus' className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/menu' className="nav-links" onClick={closeMobileMenu}>
                            Donate
                        </Link>
                    </li>
                    
                    
                    
                </ul>
                
            </div>
        </nav>
        </>
    )
}

export default Header