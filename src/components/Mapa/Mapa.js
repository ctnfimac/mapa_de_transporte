import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet';
import './../../App.css';
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());
const greenOptions = { color: '#5f27cd', fillColor: '#5f27cd', fillOpacity: 1}


function Mapa() {
  const url = 'http://localhost:3001/usuarios';

  const {data, error} = useSwr(url, fetcher);
  const usuarios = data && !error ? data.slice(0,100): [];

  return (
    <MapContainer center={[-34.62, -58.44]} zoom={13} maxZoom={14} minZoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
      />
      {usuarios && usuarios.map(usuario => 
          <Circle
          center={[usuario.latitud, usuario.longitud]}
          pathOptions={greenOptions}
          radius={50}
        >
          <Popup>
            <b>{usuario.nombre}</b> <br/>
            latitud: {usuario.latitud}<br/>
            longitud: {usuario.longitud}
          </Popup>
          </Circle>
        )
      }
    </MapContainer>
  );
}

export default Mapa;

