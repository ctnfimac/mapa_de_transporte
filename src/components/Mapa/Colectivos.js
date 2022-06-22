import { Rectangle } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { url_api_transporte } from './../../consts/backend'


function Colectivos() {
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
        <>
        {colectivos && colectivos.map(colectivo =>
            <Rectangle
                key={colectivo.id}
                bounds={[[colectivo.latitude, colectivo.longitude], [colectivo.latitude + 0.0012, colectivo.longitude - 0.0022]]}
                pathOptions={{ color: '#000', weight: 1, fill: true, fillColor: '#f1c40f', fillOpacity: .8 }}
            >
            </Rectangle>
        )
        }
        </>
    )
}


export default Colectivos;