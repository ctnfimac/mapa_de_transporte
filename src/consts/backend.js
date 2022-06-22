export const url_api_usuarios = `${process.env.REACT_APP_BACKEND_URL}/usuarios`;
export const url_api_transporte = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?agency_id=29&client_id=${process.env.REACT_APP_API_TRANSPORTE_COLECTIVO_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_TRANSPORTE_COLECTIVO_SECRET_ID}`

export const fetcher = (...args) => fetch(...args).then(response => response.json());

export const rectangleOptions = { color: '#5f27cd', fillColor: '#5f27cd', fillOpacity: 1 }
