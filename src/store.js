import { createStore } from 'redux';


//funcion reductora que vamos a usar, recibe un action y un estado y 
//devuelvo un objeto q es es nuevo estado
const reducer = (state,action) =>{
    
    if (typeof state === 'undefined') {
        return ({
            cart:action.product
        })
    }

    if(action.type === 'addMonto'){
        
        return({//voy a devolver un nuevo estado
            ...state, //copio todos los atributos del estado
            cart: action.product//y la que era cart es la unica q escribo
        })
        
    }
};

//exportamos el metodo createStore que recibe dentro una funcion reductora y es estado inicial
export default createStore(reducer, {cart:{}});




/*
Suponiendo que 
state = {
    fecha: '123',
    modelo: 'a',
    cars:[]
}
Hacer:
...state,cars:['nuevo']

Es lo mismo que hacer:
fecha:state.fecha,
modelo:state.modelo,
cars:['nuevo']

Es decir, lo que logro es no tener q volver a copiar estados que no voy a cambiar
*/