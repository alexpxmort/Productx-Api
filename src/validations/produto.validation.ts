
/**
 * Arquivo de configuração de validação de Produto
 * 
 */


const yup   =require('yup')
export const schemaProduto =  yup.object().shape({
    nome:yup.string().min(1).required('O nome é obrigatório'),
    descricao:yup.string(),
    preco:yup.number('O campo deve ser númerico').required('O preço é obrigatório'),
    quantidade:yup.number()
    .required('A quantidade é obrigatória')
    .integer(),
});
