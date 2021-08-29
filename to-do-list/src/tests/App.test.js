import React from 'react';
import {shallow} from 'enzyme';
import {uuid as v4} from 'uuidv4';
import AddForm from '../components/AddForm';
import { InputCustom } from '../components/input-custom';
import { Form } from '@unform/web';
import ListToDo from '../components/ListToDo';
import AddToDoPage from '../pages/AddToDo';


describe ('#Components', () => {
  describe ('#AddForm', () => {
    it('Submit the form correctly',()=>{
      const ref = React.createRef();
      const _handleSubmit = jest.fn();
      let wrapper = shallow(<AddForm  handleSubmit={_handleSubmit} ref={ref}/>);
      let form = wrapper.find("#addForm");
      expect(form).toHaveLength(1);

      let nameInput = form.find('.custom-input');
      expect(nameInput).toHaveLength(1);
      expect(nameInput.getElement()['props']['name']).toEqual('name');
      expect(nameInput.getElement()['props']['placeholder']).toEqual('Name');
    
      form.simulate('submit',{preventDefault(){}});

      expect(_handleSubmit).toHaveBeenCalled();
      expect(wrapper).toMatchSnapshot();
    })
  }); 

  describe ('#InputCustom', () => {
    it('Changes the input correctly', () => {
      let wrapper = shallow(<Form initialData={{teste:''}} id='testForm'>
        <InputCustom className='teste' name={'teste'}  placeholder={'Name'}/>
      </Form>);

      expect(wrapper).toHaveLength(1);

      expect(wrapper.props()['initialData']).toEqual({teste:''})
    });
  });

  describe ('#ListToDo', () => {
    it('Renders the ListToDo correctly', async () => {
      const _delProp = jest.fn();
      const _complete = jest.fn();
      const _edit = jest.fn();
      const items = [
        {
          id:v4(),
          name:'Teste',
          created_at:new Date(),
          updated_at:new Date(),
          completed:false
        },
        {
          id:v4(),
          name:'Teste 2',
          created_at:new Date(),
          updated_at:new Date(),
          completed:false
        }
      ]
      const wrapper = shallow(<ListToDo items={items} edit={_edit} complete={_complete} deleteProp={_delProp}/>);
      expect(wrapper).toHaveLength(1);

      const container = wrapper.find('#grid_container_items');

      expect(container).toHaveLength(1);

      expect(container.children()).toHaveLength(2);

      expect(container.find('.item').at(0).children()).toHaveLength(4);
      expect(container.find('.item').at(0).find('span').text()).toEqual(items[0].name);
      expect(container.find('.item').at(0).children().get(1).type['render']['muiName']).toEqual('SvgIcon');
      expect(container.find('.item').at(0).children().get(2).type['render']['muiName']).toEqual('SvgIcon');
      expect(container.find('.item').at(0).children().get(3).type['render']['muiName']).toEqual('SvgIcon');

      expect(container.find('.item').at(1).children()).toHaveLength(4);
      expect(container.find('.item').at(1).find('span').text()).toEqual(items[1].name);
      expect(container.find('.item').at(1).children().get(1).type['render']['muiName']).toEqual('SvgIcon');
      expect(container.find('.item').at(1).children().get(2).type['render']['muiName']).toEqual('SvgIcon');
      expect(container.find('.item').at(1).children().get(3).type['render']['muiName']).toEqual('SvgIcon');

      //calls complete function item 1

      container.find('.item').at(0).find('.check').at(0).simulate('click');
      expect(_complete).toHaveBeenCalled();

      //calls edit function item 1

      container.find('.item').at(0).find('.edit').at(0).simulate('click');
      expect(_edit).toHaveBeenCalled();

      //calls remove function item 1

      container.find('.item').at(0).find('.remove').at(0).simulate('click');
      expect(_delProp).toHaveBeenCalled();

    });
  });
});

describe ('#Pages', () => {
  describe ('#AddToDoPage', () => {
    it('Renders the ListToDo correctly',() => {
      const items = [
        {
          id:v4(),
          name:'Teste',
          created_at:new Date(),
          updated_at:new Date(),
          completed:false
        },
        {
          id:v4(),
          name:'Teste 2',
          created_at:new Date(),
          updated_at:new Date(),
          completed:false
        }
      ]

      localStorage.setItem('tasks',JSON.stringify(items));
      let wrapper = shallow(<AddToDoPage/>);
      expect(wrapper).toHaveLength(1);
  
      let formComponent = wrapper.find('#formComponent');
      expect(formComponent).toHaveLength(1);
  
      let listComponent = wrapper.find('#listComponent');
      expect(listComponent).toHaveLength(1);

    })
  });
});