import React from 'react';
// import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {mount, shallow} from 'enzyme'
import Login from './../../../../components/Admin/Login/Login'

describe('<Login />', () => {
    
    test('El componente login se renderiza', () => {
        const myMockFn = jest.fn();
        const login = shallow(<Login loginDeAdministrador={myMockFn} user={'Christian'} />)
        expect(login.find('form').length).toEqual(1)
    })

    test('El componente login tiene los input de nombre y password', () => {
        const myMockFn = jest.fn();
        const login = shallow(<Login loginDeAdministrador={myMockFn} user={'Christian'} />)
        
        const nombreId = login.find('#nombre')
        const passwordId = login.find('#password')
        
        expect(login.find('input').length).toEqual(2)
        expect(nombreId.length).toEqual(1)
        expect(passwordId.length).toEqual(1)
    })

    test('El input de la contraseña es de tipo password', ()=>{
        // TODO
    })

    test('El input del nombre es de tipo texto', () => {
        // TODO
    })

    test('El componente login tiene correctamente el boton de Enviar', () => {
        const myMockFn = jest.fn()
        const login = shallow(<Login loginDeAdministrador={myMockFn} user={'Christian'} />)

        expect(login.find('button').length).toEqual(1)
        expect(login.find('.login_button').length).toEqual(1)
        expect(login.find('.login_button').text()).toEqual('Login')
    })

})