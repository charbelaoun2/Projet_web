import React, { Component } from "react";
import { Card, CardImg,CardText, Button, Modal, ModalHeader, ModalBody,
    Label, Row, Col, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Control, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


import { baseUrl } from '../shared/baseUrl';
import { deleteOffre } from "../redux/ActionCreators";




var file = null

// function RenderOffres({offres,  postOffre, donationId}) {
   
// if (offres != null)
//     return(
        
//         <div className="card-donation2">
            
            
                
//                     {offres.map((offre) => {
//                         return (
                           
//                             <Card style={{ maxWidth: '30rem'}} key={offre._id}>
                                
                               
                                
//                                 <CardImg src={`http://localhost:3000/images/${offre.file}`} alt="hello" style={{height:"400px",width:"400px"}}></CardImg>
                               
//                              <div className="card-offre">
//                                 <CardTitle>{offre.author.firstname} {offre.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(offre.updatedAt)))}</CardTitle>
//                                 <CardTitle>{offre.author.email}</CardTitle>
//                                 </div>
//                                 <CardText>{offre.comment}</CardText>
//                                 <Button className="btn-lg btn-getdonation" type="submit" color="primary" onClick={deleteOffre(offre._id)}>
//                                         Get Donation
//                                         </Button>
                                
//                                 </Card>
                               
                            
//                         );
//                     })}
               
            
//             <CommentForm donationId={donationId} postOffre={postOffre} />
//         </div>
       
//     );
// else
//     return(
//         <div></div>
//     );
// }


function RenderOffres({offres,  postOffre, donationId}) {
   
    if (offres != null)
        return(
            
            <div className="container card-donation2">
                
                
                    
                        {offres.map((offre) => {
                            return (
                        <div class="col-lg-4 col-md-6">
                            <div class="trainer-block">
                                <img class="img-fluid" src={`http://localhost:3000/images/${offre.file}`} alt="hello"></img>
                                <div class="text-center trainer-profile">
                                    <span class="trainer-title">{offre.author.firstname} {offre.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(offre.updatedAt)))}</span><br/>
                                    <span class="trainer-profession">{offre.author.email}</span>
                                    
                                   
                                </div>
                                <div class="trainer-content">
                                    <p><i class="fa fa-check-circle">  </i> {offre.comment}</p>
                                    <div class="trainer-social">
                                    <Button className="btn-lg" type="submit" color="primary" onClick={deleteOffre(offre._id)}>
                                           Get Donation
                                    </Button>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                               
                                 /* <Card style={{ maxWidth: '30rem'}} key={offre._id}>
                                    
                                   
                                    
                                     <CardImg src={`http://localhost:3000/images/${offre.file}`} alt="hello" style={{height:"400px",width:"400px"}}></CardImg>
                                   
                                 <div className="card-offre">
                                    <CardTitle>{offre.author.firstname} {offre.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(offre.updatedAt)))}</CardTitle>
                                   <CardTitle>{offre.author.email}</CardTitle>
                                     </div>
                                    <CardText>{offre.comment}</CardText>
                                    <Button className="btn-lg btn-getdonation" type="submit" color="primary" onClick={deleteOffre(offre._id)}>
                                           Get Donation
                                            </Button>
                                    
                                    </Card>
                                    */
                                
                            );
                        })}
                   
                
                <CommentForm donationId={donationId} postOffre={postOffre} />
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
      isModalOpen: false,
      file:null
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
    console.log(values);
    this.toggleModal();
    this.props. postOffre(this.props.donationId, values.rating,values.comment,this.state.file);
}
handleUpload(e){
    const bearer = 'Bearer ' + localStorage.getItem('token');
    e.preventDefault();
    const file = e.target.files[0];

      let formData = new FormData();
      formData.append('files', file);
      

     
       fetch(baseUrl + 'imageUpload', {
                method: 'POST',
                body: formData,
                headers: {
                      
                    'Authorization': bearer
                },
                credentials: 'same-origin'
            })
            .then((response) => response.json())
.then((data) => {
    this.setState({
        file: data[0].filename
      })
 
})
.catch(error => this.setState({error, isLoading: false}));
}



render() {
    console.log(file)

    return(
        
            <div className="row putdonate">
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
                        <Button className="btn-donate" outline onClick={this.toggleModal}><span className="fa fa-heart fa-lg "></span> Donate</Button>
                    </div>
                   
                </div>
            
        
       
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Add Donation</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
               
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
                                <div >

                                    <input type="file" name="files" onChange={(e) => this.handleUpload(e)} ></input>
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
                    <BreadcrumbItem><Link to='/menu'>Donations</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.donation.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.donation.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                
                <RenderOffres offres={props.offres}
                    postOffre={props. postOffre}
                    donationId={props.donation._id}
                    deleteOffre={props.OffreId} />
                    
                
            </div>
        </div>
    );
else
    return(
        <div></div>
    );
}

export default DonationDetail;