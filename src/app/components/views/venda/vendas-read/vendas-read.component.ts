import { Component, OnInit } from '@angular/core';
import { Venda } from '../vendas.model';

@Component({
  selector: 'app-vendas-read',
  templateUrl: './vendas-read.component.html',
  styleUrls: ['./vendas-read.component.css']
})
export class VendasReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'categoria', 'nome', 'descricao', 'custo', 'valor', 'acoes'];
  vendas: Venda[] = []

  constructor() { }

  ngOnInit(): void {
  }



  removeVenda(id: String){

  }

}
