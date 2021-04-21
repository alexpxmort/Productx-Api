/**
 * Arquivo com array de rotas paar ser usada na classe app,no registro das rotas
 */

const prod = require('../routes/produto.route')

 export const ROUTES = [
    
    {
        nome:'produtos',
        path:prod
    }
    
 ]
