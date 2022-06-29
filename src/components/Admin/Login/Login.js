import {Link} from 'react-router-dom';

const Login = ({loginDeAdministrador, user}) => {
    return(
        <>
        <form onSubmit={e => loginDeAdministrador(e)} >
            <p>
                <label htmlFor="nombre">Nombre</label><br/>
                <input type="text" name="nombre" id="nombre"/>
            </p>
            <p>
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password"/>
            </p>
            <button>Ingresar</button>   
        </form>
        {user && <Link to="/admin"> Ir al Admin </Link>}
        </>
    )
}

export default Login;