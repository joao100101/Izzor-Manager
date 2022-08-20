import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { CategoriaEstoque } from '../categoriaEstoque.model';
import { EstoqueService } from '../estoque.service';

@Component({
  selector: 'app-estoque-update',
  templateUrl: './estoque-update.component.html',
  styleUrls: ['./estoque-update.component.css']
})
export class EstoqueUpdateComponent implements OnInit {
  id: String = ''
  cat: CategoriaEstoque = {
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(private service: EstoqueService, private snack: MatSnackBar, private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = String(this.aRoute.snapshot.paramMap.get('id'));
    this.find();
  }

  find() {
    this.service.findByID(this.id).subscribe((res) => {
      this.cat = res;
    }, err =>{
      mensagem('Ocorreu um erro ao encontrar a categoria.', Class.ERRO, this.snack);
      console.log(err);
    })
  }

  update() {
    if (this.cat.nome.length >= 3) {
      this.service.update(this.cat).subscribe(res => {
        mensagem('Categoria atualizada com sucesso.', Class.OK, this.snack);
        this.router.navigate(['/estoque'])
      }, err => {
        mensagem('Ocorreu um erro, contate o administrador do sistema.', Class.AVISO, this.snack);
        console.log(err);
      })
    } else {
      mensagem('Verifique se o nome da categoria é válido.', Class.AVISO, this.snack);
    }
  }
}
