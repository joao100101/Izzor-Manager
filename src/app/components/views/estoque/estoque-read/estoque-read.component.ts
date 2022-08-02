import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaEstoque } from '../categoriaEstoque.model';
import { EstoqueService } from '../estoque.service';

var catID = "";
@Component({
  selector: 'app-estoque-read',
  templateUrl: './estoque-read.component.html',
  styleUrls: ['./estoque-read.component.css']
})
export class EstoqueReadComponent implements OnInit {
  displayedColumns: String[] = ['id', 'nome', 'materiais', 'acoes']
  categorias: CategoriaEstoque[] = []
  constructor(private service: EstoqueService) {

  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((res) =>{
      this.categorias = res;
    })
  }

  delete(id: string){
    catID = id;
  }

  

}


@Component({
  selector: 'estoque-delete',
  styleUrls: ['./estoque-delete/estoque-delete.css'],
  templateUrl: './estoque-delete/estoque-delete.html',
})
export class DialogClose {
  public estoque: CategoriaEstoque = {
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(private router: Router, private service: EstoqueService,public dialogRef: MatDialogRef<DialogClose>) {

  }

  deletar(){
  }

  close() {
    this.dialogRef.close();
  }
}