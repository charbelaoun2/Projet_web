
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import React from 'react';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';


function RenderCard({ leader}) {
    return(
        <div to={`/home/${leader._id}`} >
        <Card className="card-main">          
            
            <CardImg src={baseUrl+leader.image} alt={leader.name} className="card-img"/>
            <CardBody className="card-body">
            <CardTitle className='card-title-home1'>
                <div>
                    <span className='card-title-home1' >{leader.name}</span><br/>
                    <span className='card-title-home2'>{leader.post}</span>

                </div>
                
            </CardTitle>
            
            <CardText>{leader.description}</CardText>
            <div className="card-info">
                <span className="card-info-text"><i class="fa fa-phone fahome"> </i> {leader.phone}</span>
                <span class="card-info-text"><i class="fa fa-envelope-o fahome"> </i>
                <a> {leader.email}</a></span>
            </div>
            </CardBody>
            
        
        </Card>
        </div>

    );
}

const Home = (props) => {

    const home = props.leaders.leaders.map((leader) => {
        return (
            <div key={leader._id} className="col-12 col-md-5 m-1">
                <RenderCard leader={leader} />
            </div>
        );
    });

    if (props.leaders.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.leaders.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.leaders.errMess}</h4>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container-main1">
          
            <div className="hero">
                
              <h1 className="hero-text-h1">You can help people thrive.</h1>
              
              <Link to="/Menu" className="btn btn-primary btn-home">Donations</Link>
              
              
                 
            </div>

            <div className='container'>
                <h1 className='about-us-title'>Our Team</h1>
            </div>
    
            <div className="container">
                <div className='row card-main'>
                        {home}
                </div>      
                      
            </div>
            </div>
            
      );
         
}


export default Home;