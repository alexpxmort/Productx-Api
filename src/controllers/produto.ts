import ProdutoService from "../modules/produto/produto.service";
const ProdutoUtil  = require('../utils/produto.util')
import {schemaProduto} from '../validations/produto.validation'
import * as Yup from 'yup'


  export default class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    teste(req,res){
        return res.status(200).json(
            {
                'msg':'Rota Produto Works!'
            }
        ) 
    }
  
    async create(req,res) {
      try{
        await  schemaProduto.validate(req.body,{abortEarly:false});
        try{
          let  produto = await this.produtoService.create(req.body);
      
          return res.status(200).json({produto:produto,erro:false});    
      }catch(err){
        return res.status(200).json({'msg':`Erro ao atualizar produto: ${err.message}`,erro:true});
      }
      }catch(err){
        let errorMessages = {};

        if(err instanceof Yup.ValidationError){
          console.log( err)
          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          })
        }
        return res.status(400).json({msg:'Dados inválidos',error:true,erros:errorMessages});
      }

    }
  
    async findAll(req,res) {
      let produtos = await this.produtoService.findAll();
      
      if(produtos.length > 0){
        produtos.forEach( (val)=>{
         val['situacao'] =   ProdutoUtil.getSituacao(val);
        })
      }

      return res.status(200).json({produtos:produtos,erro:false});
    }
  
    async findOne(req,res) {

      const {id} = req.params;
      let produto = await this.produtoService.findOne(id);

      if(!produto){
        return res.status(404).json({'msg':'Produto Não encontrado!',erro:true});
      }

      produto['situacao']  = await ProdutoUtil.getSituacao(produto);

      return res.status(200).json({produto:{produto,erro:false}});
    }
  
    async update(req,res) {
      const {id} = req.params;
      let produto = await this.produtoService.findOne(id);

      if(!produto){
        return res.status(404).json({'msg':'Produto Não encontrado!',erro:true});
      }

      try{
        await  schemaProduto.validate(req.body,{abortEarly:false});
        try{
        await this.produtoService.update(id,req.body);
        return res.status(200).json({'msg':'Produto Atualizado com Sucesso! ',erro:false});
      }catch(err){
        return res.status(200).json({'msg':`Erro ao atualizar produto: ${err.message}`,erro:true});
      }
      }catch(err){
        let errorMessages = {};

        if(err instanceof Yup.ValidationError){
          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          })
        }
        return res.status(400).json({msg:'Dados inválidos',error:true,erros:errorMessages});
      }

    }
  
    async remove(req,res) {
      const {id} = req.params;
      let produto = await this.produtoService.findOne(id);

      if(!produto){
        return res.status(404).json({'msg':'Produto Não encontrado!',erro:true});
      }

      try{
        await this.produtoService.remove(id);
        return res.status(200).json({'msg':'Produto deletado Com Sucesso!',erro:false});
      }catch(err){
        return res.status(200).json({'msg':`Erro ao deletar produto: ${err.message}`,erro:true});
      }
    }
  }
  
