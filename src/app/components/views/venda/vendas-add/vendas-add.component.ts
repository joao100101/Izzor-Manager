import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categoria/categoria.model';
import { CategoriaService } from '../../categoria/categoria.service';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';

@Component({
  selector: 'app-vendas-add',
  templateUrl: './vendas-add.component.html',
  styleUrls: ['./vendas-add.component.css']
})
export class VendasAddComponent implements OnInit {
  valorSel: String = '';
  categorias: Categoria[] = []
  produtos: Produto[] = []
  constructor(private service: CategoriaService, private prodService: ProdutoService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.service.findAll().subscribe(res =>{
      this.categorias = res;
    })
  }

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
  selecionado(item: any){
    this.produtos = []
    this.categoria = this.categorias[item.value-1];
    console.log(this.categoria)
    this.prodService.findByCategoryID(this.categoria.id!).subscribe(prods =>{
      this.produtos = prods;
      console.log(this.produtos)
    })
  }

  prodSelecionado(item: any){

  }

  create(){

  }
}
