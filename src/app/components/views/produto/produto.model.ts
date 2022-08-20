import { Parte } from "./produto-partes/partes.model";
import { Variacoes } from "./variacoes/variacoes.model";

export interface Produto{
    id?: String;
    categoria_id: Number;
    categoria: String;
    nome: String;
    variacoes: Variacoes[],
    partes: Parte[],
    descricao: String;
    custo: Number;
    valor: Number;
}
