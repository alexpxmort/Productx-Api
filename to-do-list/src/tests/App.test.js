import React, { useRef } from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import AddForm from '../components/AddForm';
import { Button } from '@material-ui/core';
import { InputCustom } from '../components/input-custom';



describe ('#AddForm', () => {
  it('Submit the form correctly',()=>{
    const ref = React.createRef();
    const _handleSubmit = jest.fn();
    let wrapper = shallow(<AddForm handleSubmit={_handleSubmit} ref={ref}/>);
    let form = wrapper.find("#addForm");
    expect(form).toHaveLength(1);

    let nameInput = form.find('.custom-input');
    expect(nameInput).toHaveLength(1);

    expect(nameInput.getElement()['props']['name']).toEqual('name');
    expect(nameInput.getElement()['props']['placeholder']).toEqual('Name');
  
    form.simulate('submit',{preventDefault(){}});

    expect(_handleSubmit).toHaveBeenCalled();
  })
}); 