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


const Admin = () => {
  const data = [
    { name: "Donation Alimentaire", users: 5 },
    { name: "Donation educative", users: 3 },
    { name: "Donation Medical", users: 2 },
    { name: "Donation Vestimentaire", users: 1 },
  ];

  return (
    <div>
      <div className="container">
      <h1 className="admin-dashboard-title"> Admin Dashboard</h1>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-lg-6">
                <Bar
                data={{
                  // Name of the variables on x-axies for each bar
                  labels: ["Donation Alimentaire", "Donation educative", "Donation Medical", "Donation Vestimentaire"],
                  datasets: [
                    {
                      // Label for bars
                      label: "total count/value",
                      // Data or value of your each variable
                      data: [5, 10, 7, 2],
                      // Color of each bar
                      backgroundColor: ["aqua", "green", "red", "yellow"],
                      // Border color of each bar
                      borderColor: ["aqua", "green", "red", "yellow"],
                      borderWidth: 0.5,
                    },
                  ],
                }}
                // Height of graph
                height={400}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          // The y-axis value will start from zero
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                  legend: {
                    labels: {
                      fontSize: 15,
                    },
                  },
                }}
              />
          </div>
          <div className="col-lg-6">
              <DashBoard/>
          </div>
        </div>
          
      </div>
      

      <div className="container data-table">
      <DataTable />
      </div>
     

    </div>
    
  );
};

export default Admin;