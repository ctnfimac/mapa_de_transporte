import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
    ACTUALIZAR_COLECTIVOS,
    OBTENER_COLECTIVOS,
    ELEGIR_LINEA_DE_COLECTIVO,
    INICIAR_TIMER,
    DETENER_TIMER,
    COLECTIVO_SELECCIONADO
} from './action'
import { estilosPorAgenciaId } from '../consts/agencias';


const inicialColectivos = {
    colectivos : [],
    temporizador: null,
    colectivo_seleccionado: null,
    estilos: { color: '#000', weight: 2, fill: true, fillColor: '#f40d0e', fillOpacity: .8 }
}

const colectivoReducer = (state = inicialColectivos, accion) => {
    if (accion.type === OBTENER_COLECTIVOS) {
        return {
            ...state,
            colectivos: accion.payload
        }
    }

    if (accion.type === ACTUALIZAR_COLECTIVOS){
        return {
            ...state,
            colectivos: accion.payload
        }
    }

    if (accion.type === ELEGIR_LINEA_DE_COLECTIVO){
        return {
            ...state,
            colectivos: accion.payload,
            // colectivo_seleccionado: accion.colectivo_seleccionado
        }
    }

    if (accion.type === INICIAR_TIMER){
        return {
            ...state,
            temporizador: accion.temporizador,
            tiempo: accion.tiempo
        }
    }

    if (accion.type === DETENER_TIMER){
        console.log('entro a detener el timer ' + accion.currentTime)
        console.log(state)
        return {
            ...state,
            temporizador: accion.temporizador,
            tiempo: clearInterval(state.tiempo)
        }
    }

    if (accion.type === "TICK"){
        // console.log('entro a TICK')
        return {
            ...state,
            // currentTime: accion.temporizador,
            colectivos: accion.payload
        }
    }

    if (accion.type === COLECTIVO_SELECCIONADO){
        const estilos = estilosPorAgenciaId(accion.payload)
        return {
            ...state,
            colectivo_seleccionado: accion.payload,
            estilos: estilos
        }
    }


    return state;
}

export default createStore(combineReducers({ colectivoReducer }), composeWithDevTools(applyMiddleware(thunk)));
