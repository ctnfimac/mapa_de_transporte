import {connect} from 'react-redux';
import {elegirLineaDeColectivo, iniciarTimer, detenerTimer, colectivoSeleccionado} from './../../redux/actionCreators';
import {lineas} from './../../consts/agencias'


const ColectivosLink = ({seleccionarColectivo, timerInit, timerStop, colectivoSeleccionado_, colectivo_actual}) => {

    const llamarLinea = (linea) => {
        /*
        if(linea === 52){
            seleccionarColectivo(linea)
            timerInit(linea)

        }else{
            timerStop()
        }*/
        // if(colectivo_actual === linea){
        //     console.log('elegiste el mismo')
        // }else{
        //     console.log('cambio la linea de colectivo')
        // }
        // colectivoSeleccionado_(linea)
        seleccionarColectivo(linea)
        timerStop()
        timerInit(linea)
        
    }

    return(
        <ul className="sidebar__colectivos">
            {lineas.map( linea => (
                <li className="sidebar__colectivos--item">
                    <div className="sidebar__colectivos-color"></div>
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
    colectivo_actual:state.colectivoReducer.colectivo_seleccionado
})

const mapDispatchToProps = dispatch => ({
    seleccionarColectivo(colectivo){
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


export default connect(null,mapDispatchToProps)(ColectivosLink);