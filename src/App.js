import AppRoutes from './components/AppRoutes';
import {Provider} from 'react-redux';
import store from './redux/store';
import { obtenerColectivos, actualizarColectivos } from  './redux/actionCreators';

// Hago la carga inicial de los colectivos
store.dispatch(obtenerColectivos())

// Inicializo la actualización de los colectivos cada 30 segundos
store.dispatch(actualizarColectivos())

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}


export default App;