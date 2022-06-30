import {Link} from 'react-router-dom';
import './Login.css'

const Login = ({loginDeAdministrador, user}) => {
    return(
        <>
        <form className="login_form" onSubmit={e => loginDeAdministrador(e)} >
            <p>
                <label htmlFor="nombre">Nombre</label><br/>
                <input type="text" name="nombre" id="nombre"/>
            </p>
            <p>
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password"/>
            </p>
            <button className="login_button">Login</button>   
            {user && <Link className="link_admin" to="/admin"> Ir al Admin </Link>}
        </form>
        </>
    )
}

export default Login;