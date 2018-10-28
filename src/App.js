import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import TablaValores from './components/TablaValores.js';
import Puntos from './components/Puntos.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col sm={8}>
              <TablaValores />
            </Col>
            <Col sm={4}>
              <Puntos />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App;
