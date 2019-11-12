import React from 'react';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import {Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
                <AddContact />
                <Contacts />
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default App;