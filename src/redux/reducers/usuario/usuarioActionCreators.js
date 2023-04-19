import {
    USUARIO_POR_BARRIO,
    USUARIO_POR_COMUNA,
    PANEL_DERECHO_MOSTRAR
} from './UsuarioAction';

import { 
    endpoint_barrio_por_barrio, 
    endpoint_barrio_por_comuna
} from './../../../../src/consts/backend'

const usuarioPorBarrio = ()  => dispatch => {
    let url_endpoint = process.env.REACT_APP_BACKEND_URL + endpoint_barrio_por_barrio
    fetch(url_endpoint)
        .then(response => response.json())
        .then(data => {
            let barrios = data.map(item => item.barrio)
            let cantidad_de_usuarios = data.map(item => item.count)
            data = {
                barrios,
                cantidad_de_usuarios
            }
            return dispatch({
                type: USUARIO_POR_BARRIO,
                payload: data
            })
        })
}


const usuarioPorComuna = ()  => dispatch => {
    let url_endpoint = process.env.REACT_APP_BACKEND_URL + endpoint_barrio_por_comuna
    fetch(url_endpoint)
        .then(response => response.json())
        .then(data => {
            let comunas = data.map(item => item.comuna)
            let cantidad_de_usuarios = data.map(item => item.count)
            data = {
                comunas,
                cantidad_de_usuarios
            }
            return dispatch({
                type: USUARIO_POR_COMUNA,
                payload: data
            })
        })
}


const panelDerechoEstado = () => ({
    type: PANEL_DERECHO_MOSTRAR,
    payload: true
})

export {
    usuarioPorBarrio,
    usuarioPorComuna,
    panelDerechoEstado
}

