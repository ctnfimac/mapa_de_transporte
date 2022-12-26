import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import Usuario from "../../../../components/Admin/listado/Usuario"


describe('<Usuario />', () =>{

    let usuario, item, borrar;

    beforeAll(() => {
        borrar = jest.fn()
        item = {
            id: '2',
            nombre: 'Christian',
            direccion: 'Las tunas 11122',
            barrio: 'liniers',
            comuna: '9',
            longitud: '-54.2',
            latitud: '-34.6'
        }
        usuario = shallow(<Usuario item={item} borrar={borrar} />)

    })

    test('Se renderisa el componente Usuario', () => {
        expect(usuario.length).toEqual(1)
    })

    test('El boton Eliminar responde al evento click correctamente', () => {
        usuario.find('button').simulate('click')
        expect(borrar.mock.calls.length).toEqual(1)
    })

    test('Existe el componente Link para modificar los valores del usuario', () => {
        const link = usuario.find('Link')
        expect(link.length).toEqual(1) 
    })

    test('Los botones eliminar y modificar tienen el texto correspondiente', () => {
        expect(usuario.find('.btn-danger').text()).toEqual('eliminar')
        expect(usuario.find('.btn-warning').text()).toEqual('modificar')
    })
    
    test('Los valores de cada columna se renderizan correctamente', () => {
        let columnas = usuario.find('.usuario_info > td')
        // compruebo que hay 8 columnas
        expect(columnas.length).toEqual(8)
        
        const valores = usuario.find('.usuario_info').first().find('td').map(column => column.text())
        expect(valores[0]).toEqual(item['id'])
        expect(valores[1]).toEqual(item['nombre'])
        expect(valores[2]).toEqual(item['direccion'])
        expect(valores[3]).toEqual(item['barrio'])
        expect(valores[4]).toEqual(item['comuna'])
        expect(valores[5]).toEqual(item['longitud'])
        expect(valores[6]).toEqual(item['latitud'])

    })

})