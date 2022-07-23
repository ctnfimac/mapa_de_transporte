import { 
    ACTUALIZAR_COLECTIVOS,
    ELEGIR_LINEA_DE_COLECTIVO,
    INICIAR_TIMER,
    DETENER_TIMER,
    COLECTIVO_SELECCIONADO
} from './action';
import { url_api_transporte  } from '../../../consts/backend'
import store from '../../store';


const elegirLineaDeColectivo = (linea) => dispatch => {
    fetch(url_api_transporte + `&agency_id=${linea}`)
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: ELEGIR_LINEA_DE_COLECTIVO,
                payload: data.slice(0, 100)
            })
        })
}


const tiempo = setInterval

const peticion = (linea) => async dispatch => {
    fetch(url_api_transporte + `&agency_id=${linea}`)
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: ACTUALIZAR_COLECTIVOS,
                payload: data
            })
        })
}

const iniciarTimer = (linea) =>({
    type: INICIAR_TIMER,
    temporizador: 'activado',
    tiempo: tiempo(() => {
        store.dispatch(peticion(linea))
    }, 30000)
})

const detenerTimer = () => {
    return({
        type: DETENER_TIMER,
        temporizador: 'desactivado',
    })
}


 const colectivoSeleccionado = (linea) =>({
    type: COLECTIVO_SELECCIONADO,
    payload: linea
})




export { 
    elegirLineaDeColectivo,
    iniciarTimer,
    detenerTimer,
    colectivoSeleccionado
}

