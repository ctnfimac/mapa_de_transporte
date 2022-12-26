import '@testing-library/jest-dom'
import { mount, shallow } from "enzyme"
import Usuario from "../../../../components/Admin/listado/Usuario"
import { BrowserRouter } from "react-router-dom";


describe('<Usuario />', () =>{

    let usuario, item, borrar;

    beforeAll(() => {
        borrar = jest.fn()
        item = {
            id: 1,
            nombre: 'Christian',
            direccion: 'Las tunas 11122',
            barrio: 'liniers',
            comuna: 9,
            longitud: -54.2,
            latitud: -34.6
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
})