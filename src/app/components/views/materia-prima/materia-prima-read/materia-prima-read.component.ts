import { Component, OnInit } from '@angular/core';
import { MateriaPrima } from '../materia-prima.model';

@Component({
  selector: 'app-materia-prima-read',
  templateUrl: './materia-prima-read.component.html',
  styleUrls: ['./materia-prima-read.component.css']
})
export class MateriaPrimaReadComponent implements OnInit {
  displayedColumns: string[] = ['lote', 'descricao', 'entrada', 'quantidade', 'custo_un', 'custo_total', 'acoes'];
  estoque: MateriaPrima[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
