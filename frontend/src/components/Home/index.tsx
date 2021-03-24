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
import { useMembers } from "../../model/member";
import { useRooms } from "../../model/room";

const Home: React.FunctionComponent = () => {
  const { isLoading, members } = useMembers();
  const memberList = members
    ?.sort((obj1, obj2) => {
      if (obj1.points < obj2.points) {
        return 1;
      }

      if (obj1.points > obj2.points) {
        return -1;
      }
      return 0;
    })
    .map((member) => {
      return (
        <MemberRow
          name={member.name}
          username={member.username}
          points={member.points}
        />
      );
    });

  const { roomsIsLoading, rooms } = useRooms();
  const roomsList = rooms?.map((room) => {
    return <ResidentsList roomNumber={room.room} residents={room.residents} />;
  });

  return (
    <Container>
      <Row>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Col xs="12" lg="6">
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
                  <tbody>{memberList}</tbody>
                </Table>
              </ListGroup>
            </Card>
          </Col>
        )}
        <Col xs="12" lg="6" className="mt-3">
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
                <tbody>{roomsList}</tbody>
              </Table>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
