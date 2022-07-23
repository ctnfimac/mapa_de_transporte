import {
    USUARIO_POR_BARRIO,
    USUARIO_POR_COMUNA
} from './UsuarioAction'


const inicialUsuarios = {
    barrios: [],
    cantidad_de_usuarios: [],
    comunas: [],
    usuarios_de_comunas: []
}

const usuarioReducer = (state = inicialUsuarios, accion) => {
    
    if (accion.type === USUARIO_POR_BARRIO) {
        return {
            ...state,
            barrios: accion.payload.barrios,
            cantidad_de_usuarios: accion.payload.cantidad_de_usuarios
        }
    }
   
    if (accion.type === USUARIO_POR_COMUNA) {
        return {
            ...state,
            comunas: accion.payload.comunas,
            usuarios_de_comunas: accion.payload.cantidad_de_usuarios
        }
    }

    return state;
}

export default usuarioReducer; 
