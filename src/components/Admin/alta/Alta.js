import { useState } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../Generales/Nav';

const Alta = ({ cerrarSesion, user }) => {
    const [nombre, setNombre ] = useState('')
    const [direccion, setDireccion ] = useState('')
    const [respuesta, setRespuesta ] = useState(null)

    const submitValues = (e) =>{
        e.preventDefault()
        if( nombre !== '' && direccion !== ''){
            const usuario = {
                'nombre': nombre,
                'direccion': direccion
            }
            fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            .then(function (response) {
                if(response.ok){
                    setNombre('')
                    setDireccion('')
                    setRespuesta('ok')
                }else{
                    console.log('Error en la respuesta')
                    setRespuesta('nook')
                }
            })
            .catch(function (error) {
                setRespuesta('nook')
                console.log('error: ' + error)
            });
        }else{
            setRespuesta('nook')
        }
    }

    return(
        <Nav user={user} cerrarSesion={cerrarSesion} publico={false}>
            <div className="form__container_alta">
                {respuesta ==='ok' && <p className="form__respuesta correcta">Usuario agregado correctamente</p>}
                {respuesta ==='nook' && <p className="form__respuesta incorrecta">Error el el formulario</p>}
                <h2 className="form__title">Alta de Usuarios</h2>
                <form className="form__alta" method="POST">
                    <div className="form__item">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            value={nombre}
                            onChange={e => { setNombre(e.target.value)}}
                        />
                    </div>
                    <div className="form__item">
                        <label htmlFor="direccion">Dirección</label>
                        <input 
                            type="text" 
                            name="direccion" 
                            id="direccion"
                            value={direccion}
                            onChange={e => { setDireccion(e.target.value)}}
                        />
                    </div>
                    <Link to="/admin" >Volver</Link>
                    <button type="submit" onClick={submitValues}>Agregar</button>
                    
                </form>
            </div>
        </Nav>
    )
}

export default Alta;