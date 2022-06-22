import { MapContainer, TileLayer, Rectangle } from 'react-leaflet';
import { useEffect, useState } from 'react';
import {url_api_transporte} from './../../consts/backend'
import './../../App.css';
import Usuarios from './Usuarios';


function Mapa() {
  const [colectivos, setColectivos] = useState([]);

  const getDatos = () => {
    try {
      fetch(url_api_transporte)
        .then(response => response.json())
        .then(data => setColectivos(data.slice(0, 100)))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getDatos(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      getDatos(url_api_transporte);
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <MapContainer center={[-34.62, -58.44]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
      />
      <Usuarios />
      {colectivos && colectivos.map( colectivo => 
        <Rectangle
          key={colectivo.id}
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

