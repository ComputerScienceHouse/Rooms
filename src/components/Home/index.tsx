import React from "react";
import {
  Container,
  Col,
  Row,
  ListGroup,
  Card,
  CardHeader,
  Table,
  Button,
} from "reactstrap";
import { MemberRow } from "./HouseQueue/MemberRow";
import { ResidentsList } from "./ResidentsList/ResidentsList";

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <Card>
            <CardHeader>
              <Row>
                <Col>
                  <p>Housing Queue</p>
                </Col>
                <Col className="d-flex flex-row-reverse">
                  <Button color="primary">Join</Button>
                </Col>
              </Row>
            </CardHeader>
            <ListGroup flush>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Housing Points</th>
                  </tr>
                </thead>
                <tbody>
                  <MemberRow
                    name="Lonnie Gerol"
                    username="Lontronix"
                    points={420}
                  />
                  <MemberRow name="Max Meinhold" username="Mom" points={69} />
                  <MemberRow
                    name="This is a long name"
                    username="Thisisanevenlongerusername"
                    points={69}
                  />
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
                    residents={[
                      "Lonnie Gerol (lontronix)",
                      "Kenny Kim (hitchhacker)",
                    ]}
                  />
                  <ResidentsList
                    roomNumber={3014}
                    residents={[
                      "Adam Neulight (boneless)",
                      "Josh Greco (josh)",
                    ]}
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
