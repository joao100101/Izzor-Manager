import { Component, OnInit } from '@angular/core';
import { CategoriaEstoque } from '../categoriaEstoque.model';
import { EstoqueService } from '../estoque.service';

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
  }

  findAll() {
  }

}
