import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MateriaPrima } from '../materia-prima.model';

@Component({
  selector: 'app-materia-prima-add',
  templateUrl: './materia-prima-add.component.html',
  styleUrls: ['./materia-prima-add.component.css']
})
export class MateriaPrimaAddComponent implements OnInit {
  data: String =''
  material: MateriaPrima = {
    lote: '',
    descricao: '',
    entrada: new Date(),
    quantidade: 0,
    custo: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  voltar(){
  }

  create(){

  }

}
