import { Link } from 'react-router-dom';

const AdminLink = ({ user, cerrarSesion }) => {
    return (
        <ul className="sidebar__links">
            <li><h2 className="sidebar__usuario">Hola {user}!</h2></li>
            <li><Link className="sidebar__link" to="/admin">Usuarios</Link></li>
            <li><Link className="sidebar__link" to="/">Home</Link></li>
            <li><button className="sidebar__link" onClick={() => cerrarSesion()} >Cerrar Sesión</button></li>
        </ul>
    )
}


export default AdminLink;