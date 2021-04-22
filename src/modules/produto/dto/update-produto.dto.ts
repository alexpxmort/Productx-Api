
/**
 * Interface de Atualização de Produto
 * 
 */

import { ICreateProdutoRequestDto } from "./create-produto.dto";

export interface IUpdateProdutoRequestDto extends ICreateProdutoRequestDto {
      id:string;
}
