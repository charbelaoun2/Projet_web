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
  CartesianGrid,
  Bar,
} from "recharts";

const Admin = () => {
  const data = [
    { name: "Donation Alimentaire", users: 5 },
    { name: "Donation educative", users: 3 },
    { name: "Donation Medical", users: 2 },
    { name: "Donation Vestimentaire", users: 1 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Statistics</h1>
      <div className="Admin">
        <PieChart width={600} height={600}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={210}
            cy={300}
            outerRadius={180}
            fill="#1E90FF"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#1E90FF" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Admin;