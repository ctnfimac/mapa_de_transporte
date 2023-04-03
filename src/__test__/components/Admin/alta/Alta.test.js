import { shallow, mou } from "enzyme"
import Alta from "./../../../../components/Admin/alta/Alta"


describe('<Alta />', () => {

    let alta;
    let formAlta;


    beforeAll(()=>{
        const cerrarSesion = jest.fn()
        const user = {
            'nombre': 'Christian',
            'direccion': 'las tunas 222'
        }

        alta = shallow(<Alta cerrarSesion={cerrarSesion} user={user} />)
        formAlta = alta.find('form')
    })

    test('Renderiza correctamente', () => {
        expect(formAlta.length).toEqual(1)
        // otra forma de chequear si está el componente
        expect(formAlta).toBeTruthy(); 
    })


    test('Funciona el boton Agregar', () => {
        // alta.find('button').simulate('click')
        // alta.setState({nombre:''})
        // expect(alta.state('nombre')).toBe('')
    })
    
})