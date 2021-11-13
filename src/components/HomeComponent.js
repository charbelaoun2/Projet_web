import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Jumbotron, Button} from 'reactstrap';
    import { Loading } from './LoadingComponent';
    import { Link } from 'react-router-dom';
    import { baseUrl } from '../shared/baseUrl';


function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 


    return(
        <Card className="card-main">
            <CardImg src={baseUrl + item.image} alt={item.name}  className="card-img"/>
            <CardBody className="card-body">
            <CardTitle className='card-title-home1'>
                <div>
                    <span>{item.name}</span><br/>
                    <span className='card-title-home2'>{item.post}</span>

                </div>
                
            </CardTitle>
            
            <CardText>{item.description}</CardText>
            <div className="card-info">
                <span className="card-info-text"><i class="fa fa-phone fahome"> </i> {item.phone}</span>
                <span class="card-info-text"><i class="fa fa-envelope-o fahome"> </i>
                <a> {item.email}</a></span>
            </div>
            </CardBody>
        </Card>
    );

}


function Home(props) {
    return(
        
        <div className="container-main1">
          
          <div className="hero">
              
            <h1 className="hero-text-h1">You can help people thrive.</h1>
            
            <Link to="/Donate" className="btn btn-primary btn-home">Donate</Link>
            
            
               
          </div>
  
             <div className="container">
                 <h1 className="about-us-title">Our Team</h1>
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.donationsLoading} errMess={props.donationsErrMess}  />
                    </div>
                    <div className="col-12 col-md m-1" >
                        <RenderCard item={props.leader} />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Home;