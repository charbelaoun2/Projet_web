import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, Button, Modal, ModalHeader, ModalBody,
    Label, Row, Col, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDonation({donation}) {
    return (
        <Card>
            <CardImg src={baseUrl + donation.image} alt={donation.author} style={{ height: '45vh'}}/>
            <CardBody>
            <CardTitle>{donation.author}</CardTitle>
            <CardText>{donation.comment}</CardText>
            
            </CardBody>
    </Card>
    )
  }

function RenderComments({comments, addComment, donationId}) {
    const comnts = comments.map(comment => {
        return (
            <div className="col-lg-4 col-md-6" style={{ maxWidth: '30rem'}}>
                <Card>
                    <CardImg top  src={baseUrl + comment.image} alt={comment.author} style={{ height: '45vh'}}/>
                    <CardBody>
                    <CardTitle>{comment.author}</CardTitle>
                    <CardText>{comment.comment}</CardText>
                    <Button className="btn-lg" color="primary">Get Donation</Button>
                    </CardBody>
                </Card>
        </div>
            
    )
    });
    if (comments == null) {
        return <div></div>
    }
    return (

            <div className="row">
                               
                    {comnts}
            </div>
            
         
    );
}

const DonationDetail = (props) => {
    const donation = props.donation

    console.log(donation);
    
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.donation != null) {
        return (
            <div className="container">
            <div className="row">
            <Breadcrumb>
    
                <BreadcrumbItem><Link to="/menu">Donations</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.donation.name}</BreadcrumbItem>
            </Breadcrumb>
                
                <div className="col-12">
                    <h3>{props.donation.name}</h3>
                    <hr />
                </div>                
            </div>
            {/* <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDonation donation={props.donation} />
                </div>
            </div> */}
            <div className="row">
            
            
                    <RenderComments comments={props.comments} />
                    
                    </div>
            </div>
        );
    }
        
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length < len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModelOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.donationId, values.rating, values.author, values.comment);
        console.log('Current state is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label for="rating" md={12}>rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                <Control.text model=".author" id="author" name="author" 
                                    placeholder="Author" 
                                    className="form-control" 
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }} 
                                />
                                <Errors className="text-danger" model=".author" show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Should have more than 3 Characters',
                                        maxLength: 'Should have 15 or less Characters'
                                    }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={12}>Your feedback</Label>
                                <Col md={12}>
                                <Control.text model=".comment" id="comment" name="comment" 
                                    resize="none"
                                    rows="12" 
                                    className="form-control" 
                                    validators={{
                                        required,
                                        minLength: minLength(1)
                                    }} 
                                />
                                <Errors className="text-danger" model=".comment" show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Should not be empty!'
                                    }}
                                />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>                            
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}

export default DonationDetail;