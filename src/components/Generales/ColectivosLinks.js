import {connect} from 'react-redux';
import {elegirLineaDeColectivo} from './../../redux/actionCreators';
import {lineas} from './../../consts/agencias'


const ColectivosLink = ({seleccionarColectivo}) => {

    const llamarLinea = (linea) => {
        seleccionarColectivo(linea)
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

const mapDispatchToProps = dispatch => ({
    seleccionarColectivo(colectivo){
        dispatch(elegirLineaDeColectivo(colectivo))
    }
})


export default connect(null,mapDispatchToProps)(ColectivosLink);