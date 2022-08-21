import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { MateriaPrima } from '../materia-prima.model';
import { MateriaPrimaService } from '../materia-prima.service';
var catID = '';
var mpID = '';
@Component({
  selector: 'app-materia-prima-read',
  templateUrl: './materia-prima-read.component.html',
  styleUrls: ['./materia-prima-read.component.css']
})
export class MateriaPrimaReadComponent implements OnInit {
  displayedColumns: string[] = ['lote', 'descricao', 'entrada', 'quantidade', 'custo', 'custo_total', 'acoes'];
  estoque: MateriaPrima[] = []
  constructor(private service: MateriaPrimaService, private dialog: MatDialog, private aRoute: ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
    catID = this.aRoute.snapshot.paramMap.get('id')!;
    this.find();
  }

  delete(id: string) {
    mpID = id;
    this.openDialog('1ms', '1ms');
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MateriaPrimaRemoveComponent, {
      width: '40rem',
      panelClass: "custom",
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  find() {
    this.service.readAll(catID).subscribe(res => {
      this.estoque = res;
    })
  }

}



@Component({
  selector: 'app-materia-prima-remove',
  templateUrl: '../materia-prima-remove/materia-prima-remove.component.html',
  styleUrls: ['../materia-prima-remove/materia-prima-remove.component.css']
})
export class MateriaPrimaRemoveComponent implements OnInit {
  constructor(private router: Router, private service: MateriaPrimaService, public dialogRef: MatDialogRef<MateriaPrimaRemoveComponent>, private snack: MatSnackBar) {

  }

  ngOnInit(): void {
  }



  delete() {
    this.service.remove(mpID).subscribe((res) => {
      mensagem('Materia prima removida com sucesso.', Class.OK, this.snack);
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
