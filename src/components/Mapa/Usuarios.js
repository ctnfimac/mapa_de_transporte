import { Popup, Circle } from 'react-leaflet';
import useSwr from "swr";
import { fetcher, url_api_usuarios, rectangleOptions} from './../../consts/backend'



function Usuarios(){
    const { data, error } = useSwr(url_api_usuarios, fetcher);
    const usuarios = data && !error ? data.slice(0, 100) : [];

    return(<>
        { usuarios && usuarios.map(usuario =>
            <Circle
                key={usuario.id}
                center={[usuario.latitud, usuario.longitud]}
                pathOptions={rectangleOptions}
                radius={50}
            >
                <Popup>
                    <b>{usuario.nombre}</b> <br />
            direccion: {usuario.direccion}<br />
            latitud: {usuario.latitud}<br />
            longitud: {usuario.longitud}
                </Popup>
            </Circle>
        )
      }
      </>      
    )
}


export default Usuarios;