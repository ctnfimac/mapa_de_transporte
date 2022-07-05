import { OBTENER_COLECTIVOS, ACTUALIZAR_COLECTIVOS} from './action';
import { url_api_transporte  } from './../consts/backend'

const obtenerColectivos = () => dispatch => {
    fetch(url_api_transporte )
    .then( response => response.json())
    .then( data => {
        return dispatch({
            type: OBTENER_COLECTIVOS,
            payload: data
        })
    })
}

const peticion = () => async dispatch => {
    fetch(url_api_transporte )
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: ACTUALIZAR_COLECTIVOS,
                payload: data
            })
        })
}

const actualizarColectivos = () => dispatch => {
    const pollTimer = setInterval(() => {
        dispatch(peticion());
    }, 30000);
    return () => clearInterval(pollTimer)
}


export { obtenerColectivos, actualizarColectivos }

