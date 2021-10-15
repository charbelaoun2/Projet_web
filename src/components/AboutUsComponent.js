import React from 'react';
import {Container, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'


function AboutUs(props) {
    return(

        <Container>
            <div className="counter ">
                <Container>
                    <div className="container">  
                        <h1 className="about-us-title">ABOUT US</h1>  
                    </div>
                </Container>
            
                    <Container>
                        <div class="row row-head">
                            <div class="col-md-3 col-6 text-center">
                                <span class="numbers" >1200</span>
                                <p class="text-num">Users</p>
                            </div>
                            <div class="col-md-3 col-6 text-center">
                                <span class="numbers" >64</span>
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
            </Container>


        </Container>  
        
    )
}

 export default AboutUs;