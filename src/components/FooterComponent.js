import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4">
                    <h5>Links</h5>
                    <ul className="list-unstyled ">
                    <li><Link to='/home'><i className="fa fa-home footer-info"> Home</i></Link></li>
                    <li><Link to='/aboutus'><i className="fa fa-info footer-info"> About Us</i></Link></li>
                    <li><Link to='/menu'><i className="fa fa-bars footer-info"> Menu</i></Link></li>
                    <li><Link to='/contactus'><i className="fa fa-phone footer-info"> Contact Us</i></Link></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Our Address</h5>
                    <address>
		              Beirut Lebanon <br />
		              Naccach Lebanon <br />
		             Mansourieh Lebanon <br />
		              <i className="fa fa-phone fa-lg"></i>: +961 01 8777 22<br />
		              <i className="fa fa-fax fa-lg"></i>: +961 71 061 872 <br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         operationMC@hotmail.com</a>
                    </address>
                </div>
                <div className="col-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Operation MC </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;