
export interface Venda{
    id: Number,
    data: Date,
    categoria_id: String,
    produto_id: String,
    variacao: Object,
    tamanho: String,
    quantidade: Number,
    custos_adicionais: Number,
    custo: Number,
    valor: Number,
    lucro: Number
}