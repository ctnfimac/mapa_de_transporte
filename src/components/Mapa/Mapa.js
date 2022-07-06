import { MapContainer, TileLayer } from 'react-leaflet';
import Nav from './../Generales/Nav'
import Usuarios from './Usuarios';
import Colectivos from './Colectivos';


const Mapa = () => (
  <Nav user={null} cerrarSesion={null} publico={true}>
    <MapContainer center={[-34.62, -58.44]} zoom={13} maxZoom={14} minZoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
        />
        <Usuarios />
        <Colectivos />
      </MapContainer>
  </Nav>
)

export default Mapa;

