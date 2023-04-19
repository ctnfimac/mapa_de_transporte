export const url_api_usuarios = `${process.env.REACT_APP_BACKEND_URL}`;
export const url_api_transporte = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=${process.env.REACT_APP_API_TRANSPORTE_COLECTIVO_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_TRANSPORTE_COLECTIVO_SECRET_ID}`

export const endpoint_barrio_por_comuna = '&method=usuarios_por_comuna'
export const endpoint_barrio_por_barrio = '&method=usuarios_por_barrio'

export const fetcher = (...args) => fetch(...args).then(response => response.json());

export const rectangleOptions = { color: '#000', weight: 2, fill: true, fillColor: '#f40d0e', fillOpacity: .8 }
export const circleOptions = { color: '#5f27cd', fillColor: '#5f27cd', fillOpacity: 1 }
// "agency_id": 52,