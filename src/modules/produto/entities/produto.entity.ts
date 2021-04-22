

/**
 * Entidade de Produto
 * 
 */


import Produto from '../../../models/produto'

export default class ProdutoEntity {
    public  nome:string;
    public  descricao:string;
    public  quantidade:string;
    public preco:number;

    constructor(props:Omit<Produto,'id'>,id?){
        Object.assign(this,props)
    }
}
