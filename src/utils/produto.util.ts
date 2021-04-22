/**
 * Classe de Utilidades da Classe Produto
 * 
 */


class ProdutoUtil{
    getSituacao(prod){
        let situacao = {nome:'Crítico',cor:'#ff0000'};
        if(prod && prod.hasOwnProperty('quantidade')){
           if(prod.quantidade > 0){
            if(prod.quantidade >20 && prod.quantidade <=50){
                situacao = {nome:'Alerta',cor:'#ffff00'};
                '';
            }else{
                situacao = {nome:'OK',cor:'#00ff00'};
            }   
           }
        }
        return situacao;
    }
    formatObject (obj){
        return JSON.parse(JSON.stringify(obj));
     }
}


module.exports = new ProdutoUtil();