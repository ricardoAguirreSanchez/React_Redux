import React, { Component } from 'react';
import { FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import store from '../store';


class Puntos extends Component {
  constructor(){
    super();
    this.state = {
      puntosInicial: 328,
      montoTotal: 35100
    }
    
  }

  componentWillMount() {
    store.subscribe(()=>{
      const nuevosPuntos = this.state.puntosInicial - (store.getState().cart.cantidad);
      if(nuevosPuntos>0){
        this.setState({
          puntosInicial: this.state.puntosInicial - (store.getState().cart.cantidad),
          montoTotal: this.state.montoTotal + (store.getState().cart.pesos)
        })
        alert("Compra exitosa.");
      }else{
        alert("No cuenta con la cantidad suficiente para comprar esos pesos.");
      }
      
    });
  }
    //store.subscribe(updateDatos);
    // //me suscribo para ver los cambios
    // store.subscribe(()=>{
    //   const puntosActual = this.state.puntosInicial- store.getState().cart.cantidad;
    //   const montoActual = this.state.montoTotal - store.getState().cart.pesos;
    //   document.getElementById("textPuntos").value = puntosActual;
    //   document.getElementById("textMonto").value =  montoActual;
    // })
  
  
  render() {
    return (

      <form>
        <FormGroup style={{ textAlign: "center"}}>
          <h3 style={{ textAlign: "center"}}>CANTIDAD TOTAL</h3>
          <input id="textPuntos"
            type="text"
            value= {this.state.puntosInicial}
            placeholder={this.state.puntosInicial}
            style={{ height: '75px' ,textAlign: "center"}}
          />
          
          </FormGroup>

          <FormGroup style={{ textAlign: "center"}}>
          <h3 style={{ textAlign: "center"}}>MONTO TOTAL</h3>  
          <input id="textMonto"
            type="text"
            value={this.state.montoTotal}
            placeholder={this.state.montoTotal}
            style={{ height: '75px' ,textAlign: "center"}}
          />
        </FormGroup>
      </form>

    )
  }

}

export default Puntos;
