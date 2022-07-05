import { Rectangle } from 'react-leaflet';
import { connect } from 'react-redux';
import { rectangleOptions } from './../../consts/backend'


function Colectivos({colectivos}) {
    return (
        <>
        {colectivos && colectivos.map(colectivo =>
            <Rectangle
                key={colectivo.id}
                bounds={[[colectivo.latitude, colectivo.longitude], [colectivo.latitude + 0.0012, colectivo.longitude - 0.0022]]}
                pathOptions={rectangleOptions}
            >
            </Rectangle>
        )
        }
        </>
    )
}

const mapStateToProps = state => ({
    colectivos: state.colectivoReducer.colectivos
})

export default connect(mapStateToProps, {})(Colectivos);