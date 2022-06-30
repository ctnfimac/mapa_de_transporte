import {Link } from 'react-router-dom';

const Base = ({user,cerrarSesion,children}) => {
    return(
        <div className="pagina">
            <nav className="menu_lateral">
                <div className="menu_head">
                    <h1 className="menu__titulo">Administrador</h1>
                    <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></button>
                </div>
                <ul className="menu__enlaces">
                    <li><h2 className="menu__usuario">Hola {user.name}!</h2></li>
                    <li><Link className="menu__link" to="/admin">Usuarios</Link></li>
                    <li><Link className="menu__link" to="/">Home</Link></li>
                    <li><button className="menu__link" onClick={()=>cerrarSesion()} >Cerrar Sesión</button></li>
                </ul>
            </nav>
            <main className="main">
                {
                    children
                }
            </main>
        </div>
    )
}

export default Base;