import * as yup from 'yup';

export const schemaToDo = yup.object().shape({
  name: yup.string().test('len','É necessário pelo menos 6 caracteres',(val)=>val.length >=6)
  .required('O nome é obrigatório')
});
