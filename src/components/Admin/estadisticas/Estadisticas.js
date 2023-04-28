import GraficoDeBarras from "./GraficoDeBarras"
import Nav from './../../Generales/Nav';
import { connect } from 'react-redux';


const Estadisticas = ({ user, cerrarSesion, barrios, cantidad_de_usuarios, usuarios_de_comunas, comunas}) => {
    return(
        <Nav user={user} cerrarSesion={cerrarSesion} publico={false}>
            <section className="estadisticas">
                <div className="estadisticas__item">
                    <h2 className="estadisticas__titulo">Gráfico que indica la cantidad de personas registradas por barrio</h2>
                    <GraficoDeBarras 
                        titulo='Cantidad de Personas Por Barrio'
                        labels={barrios} 
                        label='Usuarios'
                        cantidad={cantidad_de_usuarios}
                        color='rgba(230, 126, 34,.8)'
                    />
                </div>
                <div className="estadisticas__item">
                    <h2 className="estadisticas__titulo">Gráfico que indica la cantidad de personas registradas por comuna</h2>
                    <GraficoDeBarras 
                        titulo='Cantidad de Personas Por Comuna'
                        labels={comunas} 
                        label='Usuarios'
                        cantidad={usuarios_de_comunas}
                        color='rgba(155, 89, 182,.8)'
                    />
                </div>
            </section>
        </Nav>
    )
} 


const mapStateToProps = state => ({
    barrios: state.usuarioReducer.barrios,
    cantidad_de_usuarios: state.usuarioReducer.cantidad_de_usuarios,
    comunas: state.usuarioReducer.comunas,
    usuarios_de_comunas: state.usuarioReducer.usuarios_de_comunas
})

export default connect(mapStateToProps, {})(Estadisticas);

