import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Produto } from '../../produto.model';
import { ProdutoService } from '../../produto.service';
import { Parte } from '../partes.model';

@Component({
  selector: 'app-produto-partes-create',
  templateUrl: './produto-partes-create.component.html',
  styleUrls: ['./produto-partes-create.component.css']
})
export class ProdutoPartesCreateComponent implements OnInit {

  prodID: String = this.aRoute.snapshot.paramMap.get('pid')!;
  catID: String = this.aRoute.snapshot.paramMap.get('id')!;
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
  parte: Parte = {
    id: -1,
    Nome: ''
  }
  constructor(private service: ProdutoService, private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.findById(this.prodID).subscribe((res) => {
      this.produto = res;
    })

  }

  add() {
    console.log(this.produto.partes)
    if (this.parte.Nome.length >= 3) {
      if (!this.arrayContains(this.produto.partes, this.parte.Nome)) {
        this.parte.id = this.produto.partes.length;
        this.produto.partes.push(this.parte)
        this.service.update(this.prodID, this.produto).subscribe(() => {
          this.voltar();
          this.service.mensagem("Peça cadastrada com sucesso.", Class.OK);
        }, err => {
          this.service.mensagem("Houve um erro ao cadastrar peça.", Class.ERRO);
          console.log(err);
        })
      } else {
        this.service.mensagem('Parece que essa peça já existe', Class.AVISO);
      }
    } else {
      this.service.mensagem('Verifique o tamanho do nome da peça.', Class.AVISO)
    }
  }

  arrayContains(array: Parte[], str: String): boolean {
    let res = false;
    for (let i of array) {
      if (i.Nome.toUpperCase() == str.toUpperCase()) {
        return true;
      }
    }
    return res;
  }

  voltar() {
    this.router.navigate([`categorias/${this.catID}/produtos/${this.prodID}/partes`])
  }

}
