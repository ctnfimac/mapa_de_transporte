import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
    ACTUALIZAR_COLECTIVOS,
    OBTENER_COLECTIVOS,
    ELEGIR_LINEA_DE_COLECTIVO
} from './action'


const inicialColectivos = {
    colectivos : []
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
            colectivos: accion.payload
        }
    }


    return state;
}

export default createStore(combineReducers({ colectivoReducer }), composeWithDevTools(applyMiddleware(thunk)));
