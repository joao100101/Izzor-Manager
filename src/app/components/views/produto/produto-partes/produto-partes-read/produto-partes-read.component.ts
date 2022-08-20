import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Produto } from '../../produto.model';
import { ProdutoService } from '../../produto.service';
import { Parte } from '../partes.model';

var prodID = '';
var catID = '';
var partID = '';
@Component({
  selector: 'app-produto-partes-read',
  templateUrl: './produto-partes-read.component.html',
  styleUrls: ['./produto-partes-read.component.css']
})
export class ProdutoPartesReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  partes: Parte[] = []
  constructor(private service: ProdutoService, private router: Router, private aRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    catID = this.aRoute.snapshot.paramMap.get('id')!;
    prodID = this.aRoute.snapshot.paramMap.get('pid')!
    this.find();
  }

  find() {
    this.service.findById(prodID).subscribe((res) => {
      this.partes = res.partes;
    })
  }
  add() {
    this.router.navigate([`categorias/${catID}/produtos/${prodID}/partes/create`])
  }

  voltar() {
    this.router.navigate([`categorias/${catID}/produtos`])
  }
  edit(id: String) {
    this.router.navigate([`categorias/${catID}/produtos/${prodID}/partes/${id}/edit`])
  }

  delete(id: string) {
    partID = id;
    this.openDialog('0ms', '0ms');
  }

  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteParte, {
      width: '40rem',
      panelClass: "custom",
      enterAnimationDuration,
      exitAnimationDuration
    });
  }
}

@Component({
  selector: 'variacoes-delete',
  styleUrls: ['./produto-partes-delete/produto-partes-delete.css'],
  templateUrl: './produto-partes-delete/produto-partes-delete.html',
})
export class DeleteParte {
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
  constructor(private router: Router, private service: ProdutoService, public dialogRef: MatDialogRef<DeleteParte>) {
    this.service.findById(prodID).subscribe((res) => {
      this.produto = res;
    })
  }

  deletar() {
    this.produto.partes.splice(Number(partID));
    this.service.update(prodID, this.produto).subscribe(() =>{
      this.close()
      location.reload()
      this.service.mensagem("Variação deletada!", Class.OK);
    })
  }

  close() {
    this.dialogRef.close();
  }
}
