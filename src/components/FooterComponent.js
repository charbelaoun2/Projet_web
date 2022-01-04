import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(props) {
    return(
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>Beirut, Lebanon</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+961 352 736</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>operationmc@work.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <Link to="/" className="navbar-logo">
                                     OperationMC <i className='fab fa-typo3' />
                                </Link>
                            </div>
                            <div class="footer-text">
                                <p> OperationMc permet au gens de beneficier des donations de differentes categories coome elle permet au gens de deposer des 
                                    donations pour aider autrui.
                                </p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="http://www.facebook.com"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="http://www.twitter.com"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="http://ww.google.com"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul className="list-unstyled ">
                                <li><Link to='/home'><i className="fa fa-home"> Home</i></Link></li>
                                <li><Link to='/aboutus'><i className="fa fa-info"> About Us</i></Link></li>
                                <li><Link to='/menu'><i className="fa fa-bars"> Donations</i></Link></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Donate</h3>
                            </div>
                            <Link to="/Donate" className="btn btn-primary">Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 20221, All Right Reserved </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                            <li><Link to='/home'><i> Home</i></Link></li>
                                <li><Link to='/aboutus'><i> About Us</i></Link></li>
                                <li><Link to='/menu'><i> Donations</i></Link></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;