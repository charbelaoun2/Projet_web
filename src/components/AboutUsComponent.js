import React from 'react';
import { Component } from 'react';
import {Container, Card, CardImg, CardImgOverlay, CardTitle, Button} from 'reactstrap'

import { Link } from 'react-router-dom';

class AboutUs extends Component{
    constructor(props) {
        super(props);
    
        this.state = {header: 'Beirut’s ‘homeless’ after the deadly port blast', 
        msg : 'On August 4, 2020, one of the largest non-nuclear explosions in history pulverized the port and damaged over half the city. Which left thousands of people without a roof above their head', 
        image : '/assets/images/explosionaboutus.png'}
        
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)

    }

    handleClick1(){
        this.setState({header: 'Beirut’s ‘homeless’ after the deadly port blast', 
        msg : 'On August 4, 2020, one of the largest non-nuclear explosions in history pulverized the port and damaged over half the city. Which left thousands of people without a roof above their head', 
        image : '/assets/images/explosionaboutus.png'})
    }

    handleClick2(){
        this.setState({header: 'Give hope to families in need',
         msg : 'You can make a difference in the lives of at-risk children by supporting healthy families. From diapers to blankets, we are always in need of items to help our children and families.',
        image : '/assets/images/familyaboutus.png'})
    }

    handleClick3(){
        this.setState({header: 'Kids in need',
         msg : 'To buy medicine for kids patients who are frequently locked up by their families due to aggressive or uncontrollable behaviour',
        image : '/assets/images/medecineaboutus.png'})
    }

    render(){
        return(
            

            <Container className="container-main">
            <div className="counter">
                <Container>
                    <div className="container">  
                        <h1 className="about-us-title">ABOUT US</h1>  
                    </div>
                </Container>
            
                    <Container>
                        <div className="row row-head">
                            <div className="col-md-3 col-6 text-center">
                                <span className="numbers" >1200</span>
                                <p className="text-num">Users</p>
                            </div>
                            <div className="col-md-3 col-6 text-center">
                                <span className="numbers" >64</span>
                                <p class="text-num">Donators</p>
                            </div>
                            <div class="col-md-3 col-6 text-center">
                                <span class="numbers" >50</span>
                                <p class="text-num">Benefitors</p>
                            </div>
                            <div class="col-md-3 col-6 text-center">
                                <span class="numbers">12</span>
                                <p class="text-num">Category</p>
                            </div>
                        </div>
                    </Container>
            </div>

            <Container>
                <div class="why">
                    <h1 class="why-title">Why Give?</h1>
                </div>
                <div class="row why-us" data-aos="fade-down">
                    <div class="col-lg-4 col-6">
                        <i class="fa fa-star"></i>
                        <div class="why-title2">Makes you feel good</div>
                        
                    </div>
                    <div class="col-lg-4 col-6">
                        <i class="fa fa-arrow-circle-up"></i>
                        <div class="why-title2">Strenghtens personal values</div>
                        
                    </div>
                    <div class="col-lg-4 col-6">
                        <i class="fa fa-stop-circle"></i>
                        <div class="why-title2">Giving is more impactful than ever</div>
                        
                    </div>
                    <div class="col-lg-4 col-6">
                        <i class="fa fa-rocket"></i>
                        <div class="why-title2">Gives you the opportunity to show gratitude</div>
                        
                    </div>
                    <div class="col-lg-4 col-6">
                        <i class="fa fa-users"></i>
                        <div class="why-title2">Encourages friends and family to do the same</div>
                        
                    </div>
                    <div class="col-lg-4 col-6">
                        <i class="fa fa-heart"></i>
                        <div class="why-title2">Introduces your children to the importance of generosity</div>
                        
                    </div>
                </div>
            </Container>


            <Container>
            <div class="why">
                    <h1 class="why-title">Who we serve?</h1>
            </div>
            <div className="col-md-12 text-center">
                <Button className="btn-lg" color="primary" onClick={this.handleClick1}>People</Button>
                <Button className="btn-lg" color="success" onClick={this.handleClick2}>Families</Button>
                <Button className="btn-lg" color="danger" onClick={this.handleClick3}>Kids</Button>
            </div>

            <div>
                <Container>
                    <div className="row info_aboutus">
                        <div className="col-6">
                            <h1>{this.state.header}</h1>
                            <p>{this.state.msg}</p>
                            <Link to="/Donate" className="btn btn-primary btn-aboutus">Donate</Link>
                        </div>

                        <div className="col-6">
                            <CardImg src={this.state.image}></CardImg>
                        </div>  
                    </div>

                
                

                </Container>
                
            </div>
            </Container>


        </Container>  
        
    )
}
    }




 export default AboutUs;