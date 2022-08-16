import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { MateriaPrima } from '../materia-prima.model';
import { MateriaPrimaService } from '../materia-prima.service';
var catID = '';
@Component({
  selector: 'app-materia-prima-read',
  templateUrl: './materia-prima-read.component.html',
  styleUrls: ['./materia-prima-read.component.css']
})
export class MateriaPrimaReadComponent implements OnInit {
  displayedColumns: string[] = ['lote', 'descricao', 'entrada', 'quantidade', 'custo_un', 'custo_total', 'acoes'];
  estoque: MateriaPrima[] = []
  constructor(private service: MateriaPrimaService,private dialog: MatDialog, private aRoute: ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
    catID = this.aRoute.snapshot.paramMap.get('id')!;
    this.find();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogClose, {
      width: '40rem',
      panelClass: "custom",
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  find(){
    this.service.readAll(catID).subscribe(res=>{
      this.estoque = res;
    })
  }

}


@Component({
  selector: 'estoque-delete',
  styleUrls: ['./materia-prima-delete/materia-prima-delete.dialog.css'],
  templateUrl: './materia-prima-delete/materia-prima-delete.dialog.html',
})
export class DialogClose {
  constructor(private router: Router, private service: MateriaPrimaService, public dialogRef: MatDialogRef<DialogClose>, private snack: MatSnackBar) {

  }

  delete() {
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
