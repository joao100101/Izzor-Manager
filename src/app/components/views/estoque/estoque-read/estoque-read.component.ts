import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { CategoriaEstoque } from '../categoriaEstoque.model';
import { EstoqueService } from '../estoque.service';

var catID = "";
@Component({
  selector: 'app-estoque-read',
  templateUrl: './estoque-read.component.html',
  styleUrls: ['./estoque-read.component.css']
})
export class EstoqueReadComponent implements OnInit {
  displayedColumns: String[] = ['id', 'nome', 'descricao', 'materiais', 'acoes']
  categorias: CategoriaEstoque[] = []
  constructor(private service: EstoqueService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((res) => {
      this.categorias = res;
    })
  }

  delete(id: string) {
    catID = id;
    this.openDialog('1ms', '1ms')
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogClose, {
      width: '40rem',
      panelClass: "custom",
      enterAnimationDuration,
      exitAnimationDuration
    });
  }


}


@Component({
  selector: 'estoque-delete',
  styleUrls: ['./estoque-delete/estoque-delete.css'],
  templateUrl: './estoque-delete/estoque-delete.html',
})
export class DialogClose {
  constructor(private router: Router, private service: EstoqueService, public dialogRef: MatDialogRef<DialogClose>, private snack: MatSnackBar) {

  }

  deletar() {
    this.service.remove(catID).subscribe((res) => {
      mensagem('Categoria deletada com sucesso.', Class.OK, this.snack);
      this.close();
      location.reload();
    }, err => {
      mensagem('Ocorreu um erro ao tentar deletar, contate o administrador do sistema.', Class.ERRO, this.snack);
      console.log(err);
    })
  }

  close() {
    this.dialogRef.close();
  }
}