import {connect} from 'react-redux';
import {elegirLineaDeColectivo, iniciarTimer, detenerTimer, colectivoSeleccionado} from '../../redux/reducers/colectivo/actionCreators';
import {lineas} from './../../consts/agencias'
import { panelDerechoEstado } from './../../redux/reducers/usuario/usuarioActionCreators'


const ColectivosLink = ({ elegirLineaDecolectivo_, timerInit, timerStop, colectivoSeleccionado_, mostrarPanelDerecho, mostrarPanelDerechoEstado}) => {

    const llamarLinea = (linea) => {
        elegirLineaDecolectivo_(linea)
        timerStop()
        timerInit(linea)
        colectivoSeleccionado_(linea)
    }

    return(
        <>
        <ul className="sidebar__colectivos">
            {lineas.map( linea => (
                <li className="sidebar__colectivos--item" key={linea.agency_id}>
                    <div className="sidebar__colectivos-color" style={{backgroundColor:linea.fillColor, border:'2px solid ' + linea.color}}></div>
                    <button
                    key = {linea.agency_id}
                    className="sidebar__colectivos-linea"
                    onClick={() => llamarLinea(linea.agency_id)}
                    >
                        {linea.colectivo}
                    </button>
                </li>
            ))}
           
        </ul>
         <button
                className="sidebar__button-estadisticas"
                onClick={() => mostrarPanelDerecho()}
            >
                {!mostrarPanelDerechoEstado? "Ver Estadisticas" : "Ocultar Estadisticas"}
        </button>
        </>
    )
}

const mapStateToProps = state => ({
    colectivo_actual:state.colectivoReducer.colectivo_seleccionado,
    mostrarPanelDerechoEstado: state.usuarioReducer.mostrarPanelDerecho
})

const mapDispatchToProps = dispatch => ({
    elegirLineaDecolectivo_(colectivo){
        dispatch(elegirLineaDeColectivo(colectivo))
    },
    timerInit(linea){
        dispatch(iniciarTimer(linea))
    },
    timerStop(){
        dispatch(detenerTimer())
    },
    colectivoSeleccionado_(linea){
        dispatch(colectivoSeleccionado(linea))
    },
    mostrarPanelDerecho() {
        dispatch(panelDerechoEstado())
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(ColectivosLink);