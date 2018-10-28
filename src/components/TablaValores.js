import React, { Component } from 'react';
import { Row, Grid,Col,Glyphicon} from 'react-bootstrap';

import store from '../store';


class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      productsIzq: [
        { id: 1, cantidad: 0, valor:"<ICON>", pesos: 0},
        { id: 2, cantidad: 5, valor:"<ICON>", pesos: 25},
        { id: 3, cantidad: 10, valor:"<ICON>", pesos: 100},
        { id: 4, cantidad: 20, valor:"<ICON>", pesos: 400}
      ],
      productsDerech: [
        { id: 5, cantidad: 100, valor:"<ICON>", pesos: 5000},
        { id: 6, cantidad: 200, valor:"<ICON>", pesos: 20.000},
        { id: 7, cantidad: 50, valor:"<ICON>", pesos: 10.000},
        { id: 8, cantidad: 100, valor:"<ICON>", pesos: 50.000}
      ]
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row >
            <Col md={4}>
              <Grid >
                <Row style={{ height: '75px' }}>
                  <Col   md={1}>CANTIDAD</Col><Col   md={1}>VALOR</Col><Col   md={1}>PESOS</Col>
                </Row>
                
                {this.state.productsDerech.map(product =>
                  <Row key={product.id} style={{ height: '75px' }}>
                  <Col   md={1}>{product.cantidad}</Col><Col   md={1}><Glyphicon glyph="credit-card"  onClick={() => this.addToCart(product)}/></Col><Col   md={1}>{product.pesos}</Col>
                  </Row>
                )}
                
                
              </Grid>
            </Col>
            
            <Col md={4}>
              <Grid>
                <Row style={{ height: '75px' }}>
                <Col   md={1}>CANTIDAD</Col><Col   md={1}>VALOR</Col><Col   md={1}>PESOS</Col>
                </Row>
                {this.state.productsIzq.map(product =>
                  <Row key={product.id} style={{ height: '75px' }}>
                  <Col   md={1}>{product.cantidad}</Col><Col   md={1}><Glyphicon glyph="credit-card"  onClick={() => this.addToCart(product)}/></Col><Col   md={1}>{product.pesos}</Col>
                  </Row>
                )}
              </Grid>
            </Col>
          
          
          </Row>


 


        </Grid>
      </div>
    );
  }

  addToCart(product) {
    //el dispatch lo que hace es pedir ejecutar la funcion reductora, pasando como action
    //un objeto {type,producto}
    
    store.dispatch({
      type:'addMonto',
      product: product
    })
  }
}

export default ProductList;
