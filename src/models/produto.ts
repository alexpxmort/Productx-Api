/**
 * Modelo do banco de dados para salvar as informações das jogadas do jogador
 */

 const {Model,DataTypes} = require('sequelize');

 export default class Produto extends Model{
     static init(sequelize){
         super.init({
             createdAt: {
                 field: 'created_at',
                 type: DataTypes.DATE,
             },
             updatedAt: {
                 type: DataTypes.DATE,
                 field: 'updated_at',
             },
             nome: {
                 type: DataTypes.STRING,
                 field: 'nome',
             },
             descricao: {
                type: DataTypes.STRING,
                field: 'descricao',
            },
            preco: {
                type: DataTypes.DECIMAL(10,2),
                field: 'preco',
            },
             quantidade: {
                 type: DataTypes.INTEGER,
                 field: 'quantidade',
             },
         },
         {
             sequelize,
             freezeTableName: true,
             tableName: 'produtos',
         })
     }
 
    
 }
 
 export const produtoDb = Produto