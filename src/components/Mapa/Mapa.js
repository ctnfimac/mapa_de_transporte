import { MapContainer, TileLayer, Popup, Circle, Rectangle } from 'react-leaflet';
import './../../App.css';
import useSwr from "swr";
import { useEffect, useState } from 'react';

const fetcher = (...args) => fetch(...args).then(response => response.json());
const greenOptions = { color: '#5f27cd', fillColor: '#5f27cd', fillOpacity: 1}

function Mapa() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/usuarios`;
  const url_colectivos = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?agency_id=29&client_id=${process.env.REACT_APP_API_TRANSPORTE_COLECTIVO_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_TRANSPORTE_COLECTIVO_SECRET_ID}`

  const {data, error} = useSwr(url, fetcher);
  const [colectivos, setColectivos] = useState([]);

  const usuarios = data && !error ? data.slice(0,100): [];


  useEffect( () => {
    fetch(url_colectivos)
      .then(response => response.json())
      .then(data => setColectivos(data))
      .catch(err => console.console.warn(err))
  },[url_colectivos])

  return (
    <MapContainer center={[-34.62, -58.44]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
      />
      {usuarios && usuarios.map(usuario => 
          <Circle
          key={usuario.id}
          center={[usuario.latitud, usuario.longitud]}
          pathOptions={greenOptions}
          radius={50}
        >
          <Popup>
            <b>{usuario.nombre}</b> <br/>
            direccion: {usuario.direccion}<br/>
            latitud: {usuario.latitud}<br/>
            longitud: {usuario.longitud}
          </Popup>
          </Circle>
        )
      }
      {colectivos && colectivos.map( colectivo => 
        // <Marker 
        //   key={colectivo.id}
        //   position={[colectivo.latitude, colectivo.longitude]}
        // >
        // </Marker>
        <Rectangle
          bounds={[[colectivo.latitude, colectivo.longitude], [colectivo.latitude + 0.0012, colectivo.longitude - 0.0022]]}
          pathOptions={{ color: '#000', weight: 1, fill: true, fillColor: '#f1c40f', fillOpacity:.8 }}
        >
        </Rectangle>
      )

      }
    </MapContainer>
  );
}

export default Mapa;

