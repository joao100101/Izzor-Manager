import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Produto } from '../../produto.model';
import { ProdutoService } from '../../produto.service';
import { Variacoes } from '../variacoes.model';
import { VariacoesService } from '../variacoes.service';

//ID da categoria
var ID = ''
//ID do produto
var pID = ''

@Component({
  selector: 'app-variacoes-add',
  templateUrl: './variacoes-add.component.html',
  styleUrls: ['./variacoes-add.component.css']
})
export class VariacoesAddComponent implements OnInit {
  variacao: Variacoes = {
    id: -1,
    Nome: ''
  }
  produto: Produto = {
    categoria_id: 0,
    variacoes: [],
    partes: [],
    categoria: '',
    nome: '',
    descricao: '',
    custo: 0,
    valor: 0
  }
  constructor(private prodService: ProdutoService, private service: VariacoesService, private router: Router, private aRoute: ActivatedRoute) {
    ID = this.aRoute.snapshot.paramMap.get('id')!;
    pID = this.aRoute.snapshot.paramMap.get('pid')!;
  }

  ngOnInit(): void {
    this.findProd();
  }

  findProd() {
    this.prodService.findById(pID).subscribe((res) => {
      this.produto = res;
    })
  }
  add() {
    if (this.variacao.Nome.length >= 3) {
      if (!this.arrayContains(this.produto.variacoes, this.variacao.Nome)) {
        if (this.produto.variacoes.length >= 0) {
          this.variacao.id = this.produto.variacoes.length
        }
        this.produto.variacoes.push(this.variacao);
        this.service.updateVariacoes(pID, this.produto).subscribe(() => {
          this.voltar();
          this.prodService.mensagem('Variação adicionada com sucesso.', Class.OK);
        });
      } else {
        this.prodService.mensagem('Parece que essa variação já existe.', Class.AVISO);
      }
    } else {
      this.prodService.mensagem('Verifique o tamanho do nome.', Class.AVISO);
    }
  }

  arrayContains(array: Variacoes[], str: String): boolean {
    let res = false;
    for (let i of array) {
      if (i.Nome.toUpperCase() == str.toUpperCase()) {
        return true;
      }
    }
    return res;
  }

  voltar() {
    this.router.navigate([`categorias/${ID}/produtos/${pID}/variacoes`])
  }

}
