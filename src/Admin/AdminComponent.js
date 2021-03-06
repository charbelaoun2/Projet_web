import React from "react";
import "./Admin.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid
} from "recharts";

import { Bar } from "react-chartjs-2";

import DashBoard from './DashBoard';

import DataTable from './DataTable';

import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';

import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';



// const Admin = () => {
//   const data = [
//     { name: "Donation Alimentaire", users: 5 },
//     { name: "Donation educative", users: 3 },
//     { name: "Donation Medical", users: 2 },
//     { name: "Donation Vestimentaire", users: 1 },
//   ];

//   return (
//     <div>
//       <div className="container">
//       <h1 className="admin-dashboard-title"> Admin Dashboard</h1>
//         <div className="row" style={{ textAlign: "center" }}>
//           <div className="col-lg-6">
//                 <Bar
//                 data={{
//                   // Name of the variables on x-axies for each bar
//                   labels: ["Donation Alimentaire", "Donation educative", "Donation Medical", "Donation Vestimentaire"],
//                   datasets: [
//                     {
//                       // Label for bars
//                       label: "total count/value",
//                       // Data or value of your each variable
//                       data: [5, 10, 7, 2],
//                       // Color of each bar
//                       backgroundColor: ["aqua", "green", "red", "yellow"],
//                       // Border color of each bar
//                       borderColor: ["aqua", "green", "red", "yellow"],
//                       borderWidth: 0.5,
//                     },
//                   ],
//                 }}
//                 // Height of graph
//                 height={400}
//                 options={{
//                   maintainAspectRatio: false,
//                   scales: {
//                     yAxes: [
//                       {
//                         ticks: {
//                           // The y-axis value will start from zero
//                           beginAtZero: true,
//                         },
//                       },
//                     ],
//                   },
//                   legend: {
//                     labels: {
//                       fontSize: 15,
//                     },
//                   },
//                 }}
//               />
//           </div>
//           <div className="col-lg-6">
//               <DashBoard/>
//           </div>
//         </div>
          
//       </div>
      

//       <div className="container data-table">
//       <DataTable />
//       </div>
     

//     </div>
    
//   );
// };





function RenderCard({ user}) {
    return(
        <div to={`/Admin/${user._id}`} >
        <Card className="card-main">          
            
            
            
            <CardTitle className='card-title-home1'>
                <div>
                  <h1>hellozzzz</h1>
                    <span className='card-title-home1' >{user.firstname}</span><br/>
                    <span className='card-title-home2'>{user.lastname}</span>

                </div>
                
            </CardTitle>
            
            
            
        
        </Card>
        </div>

    );
}

const Admin = (props) => {

    const admin = props.users.users.map((user) => {
        return (
            <div key={user._id} className="col-12 col-md-5 m-1">
                <RenderCard user={user} />
            </div>
        );
    });

   
    
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
                  <h1>hello</h1>
                        {admin}
                        <h1>cava</h1>
                </div>      
                      
            </div>
            </div>
            
      );
         
}



export default Admin;