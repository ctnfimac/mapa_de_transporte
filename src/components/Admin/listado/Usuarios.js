import { useEffect, useState } from 'react';
import { Link } from  'react-router-dom';
import Nav from '../../Generales/Nav';
import Usuario from './Usuario'

const Usuarios = ({cerrarSesion, user}) => {
    const [usuarios, setUsuarios] = useState([])
    const [datosActualizados, setDatosActualizados] = useState(false)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}/usuarios`)
            .then(response => response.json())
            .then(data => setUsuarios(data))
    },[datosActualizados])

    const borrar = (id) =>{
        let confirmacion = window.confirm(`Realmente quiere borrar el registro de id: ${id} ?`)
        if(confirmacion){
            fetch(`${process.env.REACT_APP_BACKEND_URL}/usuario/${id}`, { 
                method:'DELETE'
            })
            .then(response => response.text())
            .then(data => setDatosActualizados(!datosActualizados))
        }
    }

    return (
        <Nav user={user} cerrarSesion={cerrarSesion} publico={false}>
            <div className="usuarios__container">
                <h2>Lista de Usuarios</h2>
                <Link to="/admin/alta" className="btn-add">Agregar Nuevo</Link>
                <div className="table_responsive">
                <table className="usuarios__table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Barrio</th>
                            <th>Comuna</th>
                            <th>Longitud</th>
                            <th>Latitud</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                       {usuarios.map( item => 
                            <Usuario item={item} borrar={borrar} />
                        )
                        } 
                    </tbody>
                </table>   
                </div>    
            </div>
        </Nav>
    )
}

export default Usuarios;