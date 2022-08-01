import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {
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
  constructor(private route: Router, private service: ProdutoService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.produto.categoria_id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.service.findCategoryName(String(this.produto.categoria_id)).subscribe((res) => {
      this.produto.categoria = res.nome;
    })
  }


  create(): void {
    if (this.produto.nome.length > 3 && this.produto.custo >= 0 && this.produto.valor >= 0) {
      this.service.create(this.produto).subscribe(() => {
        this.service.mensagem('Produto adicionado com sucesso!', Class.OK)
        this.route.navigate(['categorias'])
      }, err => {
        for (let i in err.error.messages) {
          this.service.mensagem(err.error.messages[i].message, Class.ERRO)
        }
      });
    } else {
      this.service.mensagem("Verifique todos os campos.", Class.AVISO)
    }
  }




}

