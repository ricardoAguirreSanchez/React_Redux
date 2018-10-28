import React, { Component } from 'react';
import {Modal, Button , Row, Grid,Col} from 'react-bootstrap';


class Footer extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleCloseAceptar = this.handleCloseAceptar.bind(this);
        this.handleCloseAgregarBilletes = this.handleCloseAgregarBilletes.bind(this);

        this.state = {
            showAgregaBilletes: false,
            showAcepta: false
        };
      }
    handleCloseAgregarBilletes() {
        this.setState({ showAgregaBilletes: false });
    }

    handleCloseAceptar() {
        this.setState({ showAcepta: false });
    }

    handleShow(e) {
        if(e.target.id == "btnAgregaBilletes"){
            this.setState({ showAgregaBilletes: true });
        }else{
            this.setState({ showAcepta: true });
        }
    }

  render() {
    return (
      <div className="text-center">
        <Grid>
          <Row>
            <Col sm={6}>
                <Button id="btnAgregaBilletes" type="submit" onClick={this.handleShow}>Agregar mas billetes</Button>
            </Col>
            <Col sm={6}>
                <Button id="btnAceptar" type="submit" onClick={this.handleShow}>Aceptar</Button> 
            </Col>
          </Row>
        </Grid>



        <Modal  show={this.state.showAgregaBilletes} onHide={this.handleCloseAgregarBilletes}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar mas billetes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Descripción:</h4>
            <p>
              Para comprar "cantidad" la cual va a reducir la "cantidad total" que tiene y aumentar el "monto total" que lleva, haga click en el icono de la tarjeta que desea.
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseAgregarBilletes}>Cerrar</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showAcepta} onHide={this.handleCloseAceptar}>
          <Modal.Header closeButton>
            <Modal.Title>Aceptar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Realizado!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseAceptar}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
    </div>
    )
  }
}

export default Footer;
