/**
 * Service com funções de CRUD de Produtos
 * 
 */



import {produtoDb} from '../../models/produto';
const ProdutoUtil  = require('../../utils/produto.util')
import {ICreateProdutoRequestDto } from './dto/create-produto.dto';
import { IUpdateProdutoRequestDto } from './dto/update-produto.dto';

export default class ProdutoService {
  async create(createProdutoDto: ICreateProdutoRequestDto) {
    return await produtoDb.create(createProdutoDto)
  }

  async findAll() {
    return ProdutoUtil.formatObject(await produtoDb.findAll());
  }

  async findOne(id: number) {
    return  ProdutoUtil.formatObject( await produtoDb.findOne({ where: { id: id} }));
  }

  async update(id: number, updateProdutoDto: IUpdateProdutoRequestDto) {
    return await   produtoDb.update(updateProdutoDto,{where:{id:id}})
  }

 async remove(id: number) {
   return await produtoDb.destroy({
     where:{id:id}
   });
  }
}
