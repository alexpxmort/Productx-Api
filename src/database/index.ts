
/**
 * Arquivo onde starta a conexao do banco de Dados
 */
 const Sequelize = require('sequelize');
import{DbConfig} from '../config/database' 
 import {produtoDb} from '../models/produto'
 
 const connection = new Sequelize(DbConfig);
 
 produtoDb.init(connection);
 

 module.exports = connection;
 