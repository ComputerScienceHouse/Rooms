import React from "react";
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Card,
  CardHeader,
  Table,
} from "reactstrap";
import { MemberRow } from "./HouseQueue/MemberRow";
import { ResidentsList } from "./ResidentsList/ResidentsList";

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <Card>
            <CardHeader>Housing Queue</CardHeader>
            <ListGroup flush>
              <Table>
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Housing Points</th>
                  </tr>
                </thead>
                <tbody>
                  <MemberRow name="Lonnie Gerol" points={420} />
                  <MemberRow name="Max Meinhold" points={69} />
                </tbody>
              </Table>
            </ListGroup>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <CardHeader>Current Residents</CardHeader>
            <ListGroup flush>
              <Table>
                <thead>
                  <tr>
                    <th>Room Number</th>
                    <th>Residents</th>
                  </tr>
                </thead>
                <tbody>
                  <ResidentsList
                    roomNumber={3013}
                    residents={["Lonnie Gerol", "Kenny Kim"]}
                  />
                  <ResidentsList
                    roomNumber={3014}
                    residents={["Adam Neulight", "Josh Greco", "3D Printer"]}
                  />
                </tbody>
              </Table>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
