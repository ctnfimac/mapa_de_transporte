import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = (titulo) => ({
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: true,
            text: titulo
        }
    }
});




const GraficoDeBarras = ({ titulo, labels, label, cantidad, color}) => {
    console.log(color)
    return(
        <div className="grafico">
            <Bar
                options={options(titulo)}
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: label,
                            data: cantidad,
                            backgroundColor: color
                        }
                    ]
                }}
            />
            {/* <Bar
                options={options('Usuarios Registrados Por Comuna')}
                data={{
                    labels: comunas,
                    datasets: [
                        {
                            label: "Usuarios",
                            data: usuarios_de_comunas,
                            backgroundColor: "rgba(26, 188, 156, 0.5)"
                        }
                    ]
                }}
            /> */}
        </div>
    )
}

// const mapStateToProps = state => ({
//     barrios: state.usuarioReducer.barrios,
//     cantidad_de_usuarios: state.usuarioReducer.cantidad_de_usuarios,
//     comunas: state.usuarioReducer.comunas,
//     usuarios_de_comunas: state.usuarioReducer.usuarios_de_comunas
// })

// export default connect(mapStateToProps,{})(GraficoDeBarras);
export default GraficoDeBarras;