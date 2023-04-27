import { Routes, Route } from "react-router-dom";
import Mapa from './Mapa/Mapa';
import Alta from './Admin/alta/Alta';
import Usuarios from "./Admin/listado/Usuarios";
import Actualizar from "./Admin/actualizar/Actualizar";
import { useState } from 'react';
import './../scss/styles.scss';
import ProtectedRoute from "./Generales/ProtectedRoute";
import Login from "./Admin/Login/Login";
import Estadisticas from "./Admin/estadisticas/Estadisticas";
import { endpoint_login_de_usuario } from './../../src/consts/backend';

const AppRoutes = () => {
    const [user, setUser] = useState(window.localStorage.getItem('user'));
    const [msgLogin, setMsgLogin] = useState();

    const loginDeAdministrador = (e) => {
        e.preventDefault();
        let usuario = {
            nombre: e.target.nombre.value,
            password: e.target.password.value
        }
        let url = process.env.REACT_APP_BACKEND_URL + endpoint_login_de_usuario
        // le pego a la api y busco si el usuario existe
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(response => response.json())
            .then(data => {
                if (typeof data[0] === 'undefined') {
                    console.log('usuario incorrecto')
                    setMsgLogin('¡Credenciales Incorrectas!')
                } else {
                    window.localStorage.setItem('user', data[0].nombre)
                    setUser(window.localStorage.getItem('user'))
                }
            })
            .catch(function (error) {
                // console.log('error: ' + error)
                setMsgLogin('¡Credenciales Incorrectas!')
            });
    }

    const cerrarSesion = () => {
        window.localStorage.removeItem('user');
        setMsgLogin(null)
        setUser(null);
    }

    return(
        <>
            <Routes>
                <Route path="/" element={<Mapa />} />
                <Route
                    path="admin/alta"
                    element={<ProtectedRoute user={user}> <Alta cerrarSesion={cerrarSesion} user={user} /> </ProtectedRoute>}
                />
                <Route
                    path="admin/actualizar"
                    element={<ProtectedRoute user={user}><Actualizar cerrarSesion={cerrarSesion} user={user} /> </ProtectedRoute>}
                />
                <Route
                    path="estadisticas"
                    element={<ProtectedRoute user={user}><Estadisticas cerrarSesion={cerrarSesion} user={user} /> </ProtectedRoute>}
                />
                <Route
                    path="admin"
                    element={
                        <ProtectedRoute user={user}>
                            <Usuarios cerrarSesion={cerrarSesion} user={user} />
                        </ProtectedRoute>
                    }
                />
                < Route
                    path="/login"
                    element={<Login
                        loginDeAdministrador={loginDeAdministrador}
                        user={user}
                        cerrarSesion={cerrarSesion}
                        msgLogin={msgLogin}
                    />}
                />
            </Routes>
        </>
    )
}



export default AppRoutes;