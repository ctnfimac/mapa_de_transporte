import { Rectangle } from 'react-leaflet';
import { connect } from 'react-redux';
import { rectangleOptions } from './../../consts/backend'



function Colectivos({ colectivos, estilos}) {
    return (
        <>
        {colectivos && colectivos.map(colectivo =>
            <Rectangle
                key={colectivo.id}
                bounds={[[colectivo.latitude, colectivo.longitude], [colectivo.latitude + 0.0012, colectivo.longitude - 0.0022]]}
                pathOptions={estilos}
            >
            </Rectangle>
        )
        }
        </>
    )
}

const mapStateToProps = state => ({
    colectivos: state.colectivoReducer.colectivos,
    estilos: state.colectivoReducer.estilos
})

export default connect(mapStateToProps, {})(Colectivos);