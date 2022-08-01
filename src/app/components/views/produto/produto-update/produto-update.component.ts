import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
var ID = ''
var catID = ''
@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  produto: Produto = {
    id: '',
    categoria_id: -1,
    variacoes: [],
    partes: [],
    categoria: '',
    nome: '',
    descricao: '',
    custo: 0,
    valor: 0
  }
  constructor(private router: Router, private service: ProdutoService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    ID = this.aRoute.snapshot.paramMap.get('pid')!;
    catID = this.aRoute.snapshot.paramMap.get('id')!;
    this.findById(ID);
  }


  findById(id: String) {
    this.service.findById(id).subscribe((response) => {
      this.produto = response;
    });
  }


  voltar() {
    this.router.navigate([`/categorias/${catID}/produtos`])
  }
  update(): void {
    if (this.produto.nome.length >= 3) {
      this.service.update(ID, this.produto).subscribe(() => {
        this.router.navigate([`/categorias/${catID}/produtos`]);
        this.service.mensagem('Produto atualizado com sucesso.', Class.OK);
      }, err => {
        console.log(err);
      });
    }else{
      this.service.mensagem('Verifique o tamanho do nome do produto.', Class.AVISO)
    }
  }
}
