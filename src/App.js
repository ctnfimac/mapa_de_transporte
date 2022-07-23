import AppRoutes from './components/AppRoutes';
import {Provider} from 'react-redux';
import store from './redux/store';
import { usuarioPorBarrio, usuarioPorComuna } from './redux/reducers/usuario/usuarioActionCreators';


store.dispatch(usuarioPorBarrio())
store.dispatch(usuarioPorComuna())

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}


export default App;