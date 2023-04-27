import loginImg from './../../../assets/login/login_img.png';
import Usuarios from "./../../Admin/listado/Usuarios";

const Login = ({loginDeAdministrador, user, cerrarSesion, msgLogin}) => {
    return(
        <>
        { user ?
             <Usuarios cerrarSesion = { cerrarSesion } user = { user } /> 
        :
        <div className='login__container'>
                <section className="login">
                    <div className="login__imagen">
                        <img src={loginImg} alt="Imagen del login" ></img>
                    </div>
                    <form className="login__form" onSubmit={e => loginDeAdministrador(e)} >
                        <h3>Lineas de Colectivos</h3>

                        <p>
                            <label htmlFor="nombre">Usuario:</label>
                            <input type="text" name="nombre" id="nombre" placeholder='usuario...' />
                        </p>
                        <p>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" name="password" id="password" placeholder='contraseña...' />
                        </p>
                        <button className="login_button">Validar</button>
                        {user && <Usuarios cerrarSesion={cerrarSesion} user={user} />}
                        {msgLogin && <p className="login_msg">¡Credenciales Incorrectas!</p>}
                    </form>
                </section>
            </div>
        }

        </>
    )
}

export default Login;