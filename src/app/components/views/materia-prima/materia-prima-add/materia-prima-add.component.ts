import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaPrima } from '../materia-prima.model';
import { MateriaPrimaService } from '../materia-prima.service';

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
    descricao: '',
    entrada: new Date(),
    quantidade: 0,
    custo: 0
  }
  constructor(private router: Router, private service: MateriaPrimaService) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['estoque'])
  }

  create() {
  }

  clear() {
    this.custo.nativeElement.value = '';
  }

}
