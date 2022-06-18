import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());

function App() {
  const url = 'http://localhost:3001/usuarios'
  // const url = 'https://epok.buenosaires.gob.ar/getGeoLayer/?categoria=programas_de_salud_en_otras_instituciones&formato=geojson&srid=4326&especialidad=mac'
  const {data, error} = useSwr(url, fetcher)
  
  const usuarios = data && !error ? data.slice(0,100): [];
  // const usuarios = data && !error ? data.features.slice(0,100): [];
  // console.log(usuarios)
  return (
    <MapContainer center={[-34.62, -58.44]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
      />
      {usuarios && usuarios.map(usuario => 
          // <Marker 
          //   key = {usuario.id}
          // position={[usuario.geometry.coordinates[1], usuario.geometry.coordinates[0]]}
          // />
          <Marker 
            key = {usuario.id}
            position={[usuario.latitud,usuario.longitud]}
          />
        )
      }
    </MapContainer>
  );
}

export default App;
