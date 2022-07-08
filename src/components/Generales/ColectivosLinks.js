import {connect} from 'react-redux';
import {elegirLineaDeColectivo, iniciarTimer, detenerTimer, colectivoSeleccionado} from './../../redux/actionCreators';
import {lineas} from './../../consts/agencias'


const ColectivosLink = ({elegirLineaDecolectivo_, timerInit, timerStop, colectivoSeleccionado_}) => {

    const llamarLinea = (linea) => {
        colectivoSeleccionado_(linea)
        elegirLineaDecolectivo_(linea)
        timerStop()
        timerInit(linea)
        
    }

    return(
        <ul className="sidebar__colectivos">
            {lineas.map( linea => (
                <li className="sidebar__colectivos--item">
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
    )
}

const mapStateToProps = state => ({
    colectivo_actual:state.colectivoReducer.colectivo_seleccionado,
    // estilosl: state.colectivoReducer.estilos,
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
})


export default connect(mapStateToProps,mapDispatchToProps)(ColectivosLink);