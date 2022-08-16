import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { CategoriaEstoque } from '../categoriaEstoque.model';
import { EstoqueService } from '../estoque.service';

@Component({
  selector: 'app-estoque-create',
  templateUrl: './estoque-create.component.html',
  styleUrls: ['./estoque-create.component.css']
})
export class EstoqueCreateComponent implements OnInit {
  estoque: CategoriaEstoque = {
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(private service: EstoqueService, private _snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    if (this.estoque.nome.length >= 3) {
      this.service.criar(this.estoque).subscribe(() => {
        mensagem('Categoria criada com sucesso.', Class.OK, this._snack);
        this.router.navigate(['/estoque']);
      })
    } else {
      mensagem('Verifique se o nome da categoria é válido.', Class.AVISO, this._snack);
    }
  }

}
