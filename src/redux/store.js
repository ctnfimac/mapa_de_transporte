import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import usuarioReducer from './reducers/usuario/UsuarioReducer';
import colectivoReducer from './reducers/colectivo/ColectivoReducer';


export default createStore(combineReducers({ colectivoReducer, usuarioReducer }), composeWithDevTools(applyMiddleware(thunk)));
