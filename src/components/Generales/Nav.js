import AdminLink from './AdminLinks';
import ColectivosLink from './ColectivosLinks';

const Base = ({ user, cerrarSesion, publico, children }) => {
    return (
        <div className="pagina">
            <nav className="sidebar">
                <div className="sidebar__head">
                    <h1 className="sidebar__titulo">{publico === false ? 'Administrador' : 'Colectivos'}</h1>
                    <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></button>
                </div>
                {publico === false && user !== null ?
                    <AdminLink user={user} cerrarSesion={cerrarSesion} />
                    :
                    <ColectivosLink />
                }
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