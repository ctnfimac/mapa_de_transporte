import GraficoDeBarras from "./../Admin/estadisticas/GraficoDeBarras"
import { connect } from 'react-redux';

const EstadisticasUser = ({ barrios, cantidad_de_usuarios, comunas, usuarios_de_comunas, mostrarPanelDerecho}) => {
    const clases = mostrarPanelDerecho === 1 ? "usuario_estadisticas panelDerechoMostrar" :"usuario_estadisticas panelDerechoOcultar" ;
    return(
    <div className={clases}>
        <div className="usuario_estadisticas__item">
            <h2 className="estadisticas__titulo">Gráfico que indica la cantidad de personas registradas por barrio</h2>
            <GraficoDeBarras
                titulo='Cantidad de Personas Por Barrio'
                labels={barrios}
                label='Usuarios'
                cantidad={cantidad_de_usuarios}
                color='rgba(230, 126, 34,0.5)'
            />
        </div>
        <div className="usuario_estadisticas__item">
            <h2 className="estadisticas__titulo">Gráfico que indica la cantidad de personas registradas por comuna</h2>
            <GraficoDeBarras
                titulo='Cantidad de Personas Por Comuna'
                labels={comunas}
                label='Usuarios'
                cantidad={usuarios_de_comunas}
                color='rgba(155, 89, 182,0.5)'
            />
        </div>
    </div>
    )
}


const mapStateToProps = state => ({
    barrios: state.usuarioReducer.barrios,
    cantidad_de_usuarios: state.usuarioReducer.cantidad_de_usuarios,
    comunas: state.usuarioReducer.comunas,
    usuarios_de_comunas: state.usuarioReducer.usuarios_de_comunas
})

export default connect(mapStateToProps, {})(EstadisticasUser);
