import { Component, OnInit } from '@angular/core';
import { MateriaPrima } from '../materia-prima.model';
import {endOfTomorrow, parse} from 'date-fns'

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
    entrada: parse(this.data.toString(), 'dd,MM,yyyy', new Date()),
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
