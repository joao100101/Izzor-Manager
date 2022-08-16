import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { isToday } from 'date-fns';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { MateriaPrima } from '../materia-prima.model';
import { MateriaPrimaService } from '../materia-prima.service';
var force = false;
let id = ''
@Component({
  selector: 'app-materia-prima-add',
  templateUrl: './materia-prima-add.component.html',
  styleUrls: ['./materia-prima-add.component.css']
})
export class MateriaPrimaAddComponent implements OnInit {
  @ViewChild('custo') custo: any;
  data: String = ''
  material: MateriaPrima = {
    lote: '',
    categoria_id: '',
    descricao: '',
    entrada: new Date(),
    quantidade: 0,
    custo: 0
  }
  constructor(private router: Router, private service: MateriaPrimaService, private snack: MatSnackBar, private aRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    id = this.aRoute.snapshot.paramMap.get('id')!;
  }

  voltar() {
    this.router.navigate([`estoque/categorias/${id}/materiais`])
  }

  create(): void {
    this.material.categoria_id = id;
      if ((!isToday(this.material.entrada)) && force != true) {
        console.log(isToday(this.material.entrada))
        this.openDialog('1ms', '1ms');
    } else {
      this.service.create(this.material).subscribe(res => {
        mensagem('Material adicionado com sucesso.', Class.OK, this.snack);
        this.voltar();
      }, err => {
        mensagem('Ocorreu um erro ao adicionar o material.', Class.ERRO, this.snack);
        console.log(err);
      })
    }
  }


  clear() {
    this.custo.nativeElement.value = '';
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
  selector: 'material-delete',
  styleUrls: ['./Date-Confirm-Dialog/date-confirm.css'],
  templateUrl: './Date-Confirm-Dialog/date-confirm.html',
})
export class DialogClose {
  constructor(private dialog: MatDialog, private router: Router, private aRoute: ActivatedRoute, private service: MateriaPrimaService, public dialogRef: MatDialogRef<DialogClose>, private snack: MatSnackBar) {

  }

  create() {
    force = true;
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}