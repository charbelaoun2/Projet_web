import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, Button, Modal, ModalHeader, ModalBody,
    Label, Row, Col, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


import { baseUrl } from '../shared/baseUrl';



// function RenderDonation({donation}) {
//     return (
//         <Card>
//             <CardImg top src={baseUrl+donation.image} alt={donation.author} style={{ height: '45vh'}}/>
//             <CardBody>
//             <CardTitle>{donation.author}</CardTitle>
//             <CardText>{donation.comment}</CardText>
            
//             </CardBody>
//     </Card>
//     )
//   }




// function RenderComments({comments, postComment, donationId}) {
//     function handleClick(e) {
//         e.preventDefault();
//         alert('You clicked submit.');
//         }
//     const comnts = comments.map(comment => {
//         return (
//             <div className="col-lg-4 col-md-6" style={{ maxWidth: '30rem'}}>
//                 <Card>
//                     <CardImg top src={baseUrl+ comment.image} alt={comment.author} style={{ height: '45vh'}}/>
//                     <CardBody>
//                     <CardTitle>{comment.author.username}</CardTitle>
//                     <CardText>{comment.comment}</CardText>
//                     <Button className="btn-lg" color="primary"  onClick={handleClick}>Get Donation</Button>
//                     </CardBody>
//                 </Card>
//                 {/* <CommentForm donationId={donationId} postComment={postComment} /> */}
//         </div>
            
//     )

//     });
//     if (comments == null) {
//         return <div></div>
//     }
//     return (

//             <div className="row">
                               
//                     {comnts}
//             </div>
            
         
//     );
// }

// const DonationDetail = (props) => {

   



    
    
//     const donation = props.donation

//     console.log(donation);
    
//     if (props.isLoading) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.errMess) {
//         return(
//             <div className="container">
//                 <div className="row">            
//                     <h4>{props.errMess}</h4>
//                 </div>
//             </div>
//         );
//     }
//     else if (props.donation != null) {
//         return (
//             <div className="container">
//             <div className="row">
//             <Breadcrumb>
    
//                 <BreadcrumbItem><Link to="/menu">Donations</Link></BreadcrumbItem>
//                 <BreadcrumbItem active>{props.donation.name}</BreadcrumbItem>
//             </Breadcrumb>
                
//                 <div className="col-12">
//                     <h3>{props.donation.name}</h3>
//                     <hr />
//                 </div>                
//             </div>
//             {/* <div className="row">
//                 <div className="col-12 col-md-5 m-1">
//                     <RenderDonation donation={props.donation} />
//                 </div>
//             </div> */}
//             <div className="row">
            
            
//                     <RenderComments comments={props.comments} 
                    
//                      donationId={props.donation._id} />
                    
//                     </div>
//             </div>
//         );
//     }
        
// }

// function RenderMenuItem({ comment }) {
//     function handleClick(e) {
//         e.preventDefault();
//         alert('You clicked submit.');
//         }
//     return (
//         <div className="col-lg-4 col-md-6" style={{ maxWidth: '30rem'}}>
//         <Card>
//             <CardImg top src={baseUrl+ comment.image} alt={comment.author} style={{ height: '45vh'}}/>
//             <CardBody>
//             <CardTitle>{comment.author.username}</CardTitle>
//             <CardText>{comment.description}</CardText>
//             <Button className="btn-lg" color="primary"  onClick={handleClick}>Get Donation</Button>
//             </CardBody>
//         </Card>
//         {/* <CommentForm donationId={donationId} postComment={postComment} /> */}
// </div>
//     );
//   }
  
//   const DonationDetail = (props) => {
//     const menu = props.comments.comments.map((comment) => {
//       return (
//         <div className="col-12 col-md-5 m-1" key={comment.id}>
//           <RenderMenuItem donation={comment} />
//         </div>
//       );
//     });
  
    
    
//       return (
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h3>Donations</h3>
//               <hr />
//             </div>
//           </div>
//           <div className="row card-donation">{menu}</div>
//         </div>
//       );
    
//   };


// 
// function RenderDonation({donation}) {
//     return(
//         <div className="col-12 col-md-5 m-1">
            
//                 <Card>
//                     <CardImg top src={baseUrl + donation.image} alt={donation.name} />
                    
//                     <CardBody>
//                         <CardTitle>{donation.name}</CardTitle>
//                         <CardText>{donation.description}</CardText>
//                     </CardBody>
//                 </Card>
            
//         </div>
//     );

// }


// function RenderComments({comment, postComment,donationId}) {
//     function handleClick(e) {
//         e.preventDefault();
//         alert('You clicked submit.');
//         }
//     return (
//         <div className="col-lg-4 col-md-6" style={{ maxWidth: '30rem'}}>
//         <Card>
//             <CardImg top src={baseUrl+ comment.image} alt={comment.author} style={{ height: '45vh'}}/>
//             <CardBody>
//             <CardTitle>{comment.author}</CardTitle>
//             <CardText>{comment.description}</CardText>
//             <Button className="btn-lg" color="primary"  onClick={handleClick}>Get Donation</Button>
//             </CardBody>
//         </Card>
//         {/* <CommentForm donationId={donationId} postComment={postComment} /> */}
// </div>
    
//         );
//     // else
//     //     return(
//     //         <div><h1>Hello</h1></div>
//     //     );
// }

// function RenderComments({comments, postComment, dishId}) {
//     if (comments != null)
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <h4>Comments</h4>
//                 <ul className="list-unstyled">
                    

                   
//                         {comments.map((comment) => {
//                             return (
//                                 <div in key={comment._id}>
//                                     <li>
                                        
//                                     <p>{comment.description}</p>
//                                         <p>{comment.image} stars</p>
//                                         <p>-- {comment.author.firstname} {comment.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
//                                     </li>
//                                 </div>
//                             );
//                         })}
                   
//                 </ul>
//                 {/* <CommentForm dishId={dishId} postComment={postComment} /> */}
//             </div>
//         );
//     else
//         return(
//             <div></div>
//         );
// }

// class CommentForm extends Component {

//     constructor(props) {
//         super(props);

//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
        
//         this.state = {
//           isNavOpen: false,
//           isModalOpen: false
//         };
//     }

//     toggleModal() {
//         this.setState({
//           isModalOpen: !this.state.isModalOpen
//         });
//     }

//     handleSubmit(values) {
//         this.toggleModal();
//         this.props.postComment(this.props.donationId, values.rating, values.comment);
//     }

//     render() {
//         return(
//         <div>
//             <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
//             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//             <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//             <ModalBody>
//                 <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//                     <Row className="form-group">
//                         <Col>
//                         <Label htmlFor="rating">Rating</Label>
//                         <Control.select model=".rating" id="rating" className="form-control">
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                         </Control.select>
//                         </Col>
//                     </Row>
//                     <Row className="form-group">
//                         <Col>
//                         <Label htmlFor="comment">Comment</Label>
//                         <Control.textarea model=".comment" id="comment"
//                                     rows="6" className="form-control" />
//                         </Col>
//                     </Row>
//                     <Button type="submit" className="bg-primary">
//                         Submit
//                     </Button>
//                 </LocalForm>
//             </ModalBody>
//            </Modal>
//         </div>
//         );
//     }

// }

// const DonationDetail = (props) => {
    
//     if (props.isLoading) {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if (props.errMess) {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <h4>{props.errMess}</h4>
//                 </div>
//             </div>
//         );
//     }
//     else if (props.donation != null)        
//         return (
//             <div className="container">
//                 <div className="row">
                    
                   
//                     <div className="col-12">
//                         <h3>{props.donation.name}</h3>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row">
//                     <RenderDonation donation={props.donation}  />
//                     { <RenderComments comments={props.comments} 
//                         //  postComment={props.postComment}
//                         donationId={props.donationId} /> }
//                 </div>
//             </div>
//         );
//     else
//         return(
//             <div><h1>hello</h1></div>
//         );
// }


function RenderDonation({donation}) {
    return(
        <div className="col-12 col-md-5 m-1">
            
                <Card>
                    <CardImg top src={baseUrl + donation.image} alt={donation.name} />
                    
                    <CardBody>
                        <CardTitle>{donation.name}</CardTitle>
                        <CardText>{donation.description}</CardText>
                    </CardBody>
                </Card>
          
        </div>
    );

}

function RenderComments({comments, postComment, donationId}) {
if (comments != null)
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                
                    {comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                <li>
                                <p>{comment.comment}</p>
                                <img src={comment.file} alt="hello"></img>
                                <p>{comment.rating} stars</p>
                                <p>-- {comment.author.firstname} {comment.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                <Button type="submit" color="primary" onClick={(values) => this.handledelete(values)}>
                                        Donate
                                        </Button>
                                </li>
                            </div>
                        );
                    })}
               
            </ul>
            <CommentForm donationId={donationId} postComment={postComment} />
        </div>
    );
else
    return(
        <div></div>
    );
}

class CommentForm extends Component {
   

constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
}

fileSelectedHandler=event=>{
    console.log(event)
}

toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
}

handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.donationId, values.rating,values.comment,values.file);
}
handledelete(values) {
   
    this.props.deleteComment(this.props.donationId, values.rating,values.comment,values.file);
}

render() {
    return(
        <div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Col>
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select model=".rating" id="rating" className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col>
                    <Label htmlFor="comment">description</Label>
                    <Control.textarea model=".comment" id="comment"
                                rows="6" className="form-control" />
                    </Col>
                </Row>
                <Row className="form-group">
                                <Label htmlFor="file" md={2}>Photo de la Donation</Label>
                                <Col md={10}>
                                <div onSubmit={this.onFormsubmit}>

                                    <input type="file" name="file" model=".file" id="file" onChnage={(e) => this.onChange(e)} ></input>
                                </div>
                                </Col>
                                </Row>
                <Button type="submit" className="bg-primary">
                    Submit
                </Button>
            </LocalForm>
        </ModalBody>
       </Modal>
    </div>
    );
}

}

const DonationDetail = (props) => {
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
else if (props.donation != null)        
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.donation.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.donation.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDonation donation={props.donation} />
                <RenderComments comments={props.comments}
                    postComment={props.postComment}
                    donationId={props.donation._id} />
            </div>
        </div>
    );
else
    return(
        <div></div>
    );
}

export default DonationDetail;