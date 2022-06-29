import { useEffect, useState } from 'react';
import { Link } from  'react-router-dom';
import './Usuarios.css';

const Usuarios = ({cerrarSesion}) => {
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
        <div className="usuarios__container">
            <h2>Lista de Usuarios</h2>
            <Link to="/admin/alta" className="btn-add">Nuevo</Link>
            <button onClick={() => cerrarSesion()}>Cerrar Sesión</button>
            <table className="usuarios__table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Longitud</th>
                        <th>Latitud</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map( item => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.direccion}</td>
                            <td>{item.longitud}</td>
                            <td>{item.latitud}</td>
                            <td>
                                <button 
                                    className="btn-danger"
                                    onClick={() => borrar(item.id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                    </svg>
                            Delete
                            </button>
                                <Link to='/admin/actualizar' state={{id: item.id, nombre: item.nombre, direccion: item.direccion}} className="btn-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                            Update
                            </Link>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>   
        </div>
    )
}

export default Usuarios;