import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>   
            <Card>
              <Card.Header>
                <Card.Title as="h4">Donation Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["21%", "42%", "29%", "8%"],
                      series: [21, 42, 29, 8],
                      
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Donation Alimentaire <i className="fas fa-circle text-danger"></i>
                  Donation educative <i className="fas fa-circle text-warning"></i>
                  Donation Medical <i className="fas fa-circle text-primary"></i>
                  Donation Vestimentaire
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card> 
      </Container>
    </>
  );
}

export default Dashboard;
