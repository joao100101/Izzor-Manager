import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Produto } from '../../produto.model';
import { Variacoes } from '../variacoes.model';
import { VariacoesService } from '../variacoes.service';
var catID = ''
var pID = ''
var vID = ''
@Component({
  selector: 'app-variacoes-read',
  templateUrl: './variacoes-read.component.html',
  styleUrls: ['./variacoes-read.component.css']
})
export class VariacoesReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  public static delete: Boolean = false;
  public produto: Produto = {
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
  variacoes: Variacoes[] = []
  constructor(private router: Router, private aRoute: ActivatedRoute, private service: VariacoesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    catID = this.aRoute.snapshot.paramMap.get('id')!;
    pID = this.aRoute.snapshot.paramMap.get('pid')!;

    this.find();
  }


  find() {
    this.service.findVariacoes(pID).subscribe((res) => {
      let produto = this.produto;
      produto = res;
      this.variacoes = produto.variacoes;
    })
  }
  voltar() {
    this.router.navigate([`/categorias/${catID}/produtos/`])
  }
  delete(id: String) {
    vID = String(id);
    this.openDialog('0ms', '0ms');
  }
  static getPID() {
    return pID;
  }
  static getVID() {
    return vID;
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
  selector: 'variacoes-delete',
  styleUrls: ['./variacoes-delete/dialog-delete.css'],
  templateUrl: './variacoes-delete/dialog-delete.html',
})
export class DialogClose {
  public produto: Produto = {
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
  constructor(private router: Router, private service: VariacoesService,public dialogRef: MatDialogRef<DialogClose>) {
    this.service.findVariacoes(pID).subscribe((res) =>{
      this.produto = res;
    })
  }

  deletar(){
    let id = vID;
    for(let i in this.produto.variacoes){
      if(this.produto.variacoes[i].id == Number(id)){
        this.produto.variacoes.splice(Number(i));
        this.service.updateVariacoes(pID, this.produto).subscribe(()=>{
          this.close()
          location.reload()
          this.service.mensagem("Variação deletada!", Class.OK);
        })
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
}
