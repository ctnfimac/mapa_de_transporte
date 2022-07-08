const agencias = [52,77,5,80,53]
const lineas = [
    {
        "colectivo": 47,
        "agency_id": 52,
        "fillColor": "#ff3838",
        "color": "#000"
    },
    {
        "colectivo": 36,
        "agency_id": 77,
        "fillColor": "#fff",
        "color": "rgba(52, 152, 219,1.0)"
    },
    {
        "colectivo": 8,
        "agency_id": 5,
        "fillColor": "rgba(52, 152, 219,1.0)",
        "color": "#fff"
    },
    {
        "colectivo": 168,
        "agency_id": 80,
        "fillColor": "#fff",
        "color": "#ff3838"
    },
    {
        "colectivo": 80,
        "agency_id": 53,
        "fillColor": "#ff3838",
        "color": "#fff"
    },
    {
        "colectivo": 174,
        "agency_id": 74,
        "fillColor": "rgba(52, 152, 219,1.0)",
        "color": "#000"
    },
]


const estilosPorAgenciaId = (agency_id) => {
    let linea = lineas.find( item => item.agency_id === agency_id)
    let estilos = { color: linea.color, weight: 2, fill: true, fillColor: linea.fillColor, fillOpacity: .8 }
    return estilos
}

//     "47" :52,
//     "36" :77,
//     "8"  :5,
//     "168":80,
//     "80" :53,
//     "174":74
// }

// 52 linea 47 LINEA DE MICROOMNIBUS 47 S.A.T.C.F.I.
// 77 linea 36 SARGENTO CABRAL S.A.DE TRANSPORTE
// 5 linea 8 TRANSPORTES RIO GRANDE S.A.C.I.F.
// 80 linea 168  EXPRESO SAN ISIDRO S.A.T.C.I.F.I
// 53 linea 80  EXPRESO SAN ISIDRO S.A.T.C.I.F.I
// 74 linea 174,624.. LA CABAÃ‘A S.A.
export {agencias,lineas, estilosPorAgenciaId};