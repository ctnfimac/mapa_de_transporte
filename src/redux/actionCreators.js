import { 
    OBTENER_COLECTIVOS, 
    ACTUALIZAR_COLECTIVOS,
    ELEGIR_LINEA_DE_COLECTIVO
} from './action';
import { url_api_transporte  } from './../consts/backend'

const obtenerColectivos = () => dispatch => {
    fetch(url_api_transporte )
    .then( response => response.json())
    .then( data => {
        // let agency_id = []
        // console.log(typeof data)
        let datos = data.slice(0,101)
        // let colectivos_filtrados = []
        // agency_id = datos.map( item => item.agency_id)
        // const agency_id_filtrado = new Set(agency_id)
        // console.log('agency_id_filtrado')
        // console.log(agency_id_filtrado)
        
        return dispatch({
            type: OBTENER_COLECTIVOS,
            payload: datos
        })
    })
}

const peticion = () => async dispatch => {
    fetch(url_api_transporte )
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: ACTUALIZAR_COLECTIVOS,
                payload: data.slice(0, 100)
            })
        })
}

const actualizarColectivos = () => dispatch => {
    const pollTimer = setInterval(() => {
        dispatch(peticion());
    }, 30000);
    return () => clearInterval(pollTimer)
}

const elegirLineaDeColectivo = (linea) => dispatch => {
    console.log(url_api_transporte + `&agency_id=${linea}`)
    fetch(url_api_transporte + `&agency_id=${linea}`)
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: ELEGIR_LINEA_DE_COLECTIVO,
                payload: data.slice(0, 100)
            })
        })
}


export { 
    obtenerColectivos, 
    actualizarColectivos, 
    elegirLineaDeColectivo 
}
