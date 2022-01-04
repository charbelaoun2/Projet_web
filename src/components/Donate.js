import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label,Container  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import './Donate.css'


class Donate extends Component {
    constructor(props) {
        super(props);

       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

   
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

        return(
            
           
            <Container className="container-donate">
                
            
                <div className="row">
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-3 icon-donate">
                            <i className="fas fa-hand-holding-medical fa-5x "></i>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="title-donate">Why Donate?</h1>
                            <span className="text-donate">"And do not forget to do good and to share with others,
                                 for with such sacrifices God is pleased." (Hebrews 13:16)</span>
                        </div>          
                        
                    </div>
                    <div className="row second-donate">
                        <div className="col-3 icon-donate">
                        <i class="fas fa-hands-helping fa-5x"></i>     
                        </div>
                        <div className="col-lg-9">
                            <h1 className="title-donate">Honor someone special</h1>
                            <span className="text-donate">"And do not forget to do good and to share with others,
                                 for with such sacrifices God is pleased." (Hebrews 13:16)</span>
                        </div> 
                    </div>
                </div>
                        
                    <div className="col-lg-8">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                      
                                   
                               
                               
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Donation Type</Label>
                                    <Col md={10}>
                                    <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>Donation Alimentaire</option>
                                            <option>Donation educative</option>
                                            <option>Donation Vestimentaire</option>
                                            <option>Donation Medicale</option>
                                        </Control.select>
                                        
                                        
                                    </Col>
                                </Row>                            
                                <Row className="form-group">
                                <Label htmlFor="email" md={2}>Photo de la Donation</Label>
                                <Col md={10}>
                                <div onSubmit={this.onFormsubmit}>

                                    <input type="file" name="file" onChange={(e) => this.onChange(e)} ></input>
                                </div>
                                </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={2}>Description Donation </Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" id="message" name="message"
                                            rows="12"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                
                                
                                <Row className="form-group">
                                    <Col md={{size:10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                        Donate
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>                   
                        
                    </div>
                    

                </div>
            
        </Container>
        
        );

    }
}

export default Donate;