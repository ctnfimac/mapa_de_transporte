import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Alta.css';

const Alta = () => {
    const [nombre, setNombre ] = useState('')
    const [direccion, setDireccion ] = useState('')
    const [respuesta, setRespuesta ] = useState(null)

    const onChangeNombre = event => {
        setNombre(event.target.value);
    };

    const onChangeDireccion = event => {
        setDireccion(event.target.value);
    };

    const submitValues = (e) =>{
        e.preventDefault()
        if( nombre !== '' && direccion !== ''){
            const usuario = {
                'nombre': nombre,
                'direccion': direccion
            }
            fetch('http://localhost:3001/usuario', {
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
        <div className="form__container">
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
                        onChange={onChangeNombre}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="direccion">Dirección</label>
                    <input 
                        type="text" 
                        name="direccion" 
                        id="direccion"
                        value={direccion}
                        onChange={onChangeDireccion}
                    />
                </div>
                <Link to="/admin" >Volver</Link>
                <button type="submit" onClick={submitValues}>Agregar</button>
                
            </form>
        </div>
    )
}

export default Alta;