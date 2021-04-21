/**
 * Rotas com metódos a ser utilizados na rota gameplay
 * Os Metódos permitidos sao GET,POST,PUT,DELETE
 */

 const express = require('express').Router();
 import ProdutoService from '../modules/produto/produto.service'
import ProdutoController from '../controllers/produto' 
 const router = express;

 const _produtoConroller = new ProdutoController(new ProdutoService());
 
 router.get('/find/:id',async(req,res)=>{
   return await _produtoConroller.findOne(req,res);
});
 router.get('/teste',async(req,res)=>{
    return await _produtoConroller.teste(req,res);
 });
 
 router.post('/create',async(req,res)=>{
    return await _produtoConroller.create(req,res);
 });
 
 router.get('/all',async(req,res)=>{
   return await _produtoConroller.findAll(req,res);
});

 router.put('/:id',async(req,res)=>{
     return await _produtoConroller.update(req,res);
  });
 

 router.delete('/:id',async(req,res)=>{
    return await _produtoConroller.remove(req,res);
 });



 module.exports = router;