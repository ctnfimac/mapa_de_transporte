import React from 'react';
// import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {mount, shallow} from 'enzyme'
import Login from './../../../../components/Admin/Login/Login'

describe('<Login />', () => {

    let login, myMockFn;

    beforeAll(() => {
        myMockFn = jest.fn();
        login = shallow(<Login loginDeAdministrador={myMockFn} user={'Christian'} />)
    })
    
    test('El componente login se renderiza', () => {
        expect(login.find('form').length).toEqual(1)
    })

    test('El componente login tiene los input con id de nombre y password', () => {
        const nombreId = login.find('#nombre')
        const passwordId = login.find('#password')
        
        expect(login.find('input').length).toEqual(2)
        expect(nombreId.length).toEqual(1)
        expect(passwordId.length).toEqual(1)
    })

    test('Existe el input del nombre de tipo texto y el del password de tipo password', ()=>{
        expect(login.contains(<input type="password" name="password" id="password" />)).toBeTruthy()
        expect(login.contains(<input type="text" name="nombre" id="nombre" />)).toBeTruthy()
    })

   
    test('El componente login tiene correctamente el boton de Enviar', () => {
        expect(login.find('button').length).toEqual(1)
        expect(login.find('.login_button').length).toEqual(1)
        expect(login.find('.login_button').text()).toEqual('Login')
    })


    test('El onSubmit se llama correctamente', () => {
        login.find('form').simulate('submit', { preventDefault: () => { } });
        expect(myMockFn).toHaveBeenCalled()
    })

})