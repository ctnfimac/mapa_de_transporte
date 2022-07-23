import {
    USUARIO_POR_BARRIO,
    USUARIO_POR_COMUNA
} from './UsuarioAction';


const usuarioPorBarrio = ()  => dispatch => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/usuariosPorBarrio`)
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
    fetch(`${process.env.REACT_APP_BACKEND_URL}/usuariosPorComuna`)
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


export {
    usuarioPorBarrio,
    usuarioPorComuna
}

