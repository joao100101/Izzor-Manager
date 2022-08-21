import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaPrima } from '../materia-prima.model';

@Component({
  selector: 'app-materia-prima-update',
  templateUrl: './materia-prima-update.component.html',
  styleUrls: ['./materia-prima-update.component.css']
})
export class MateriaPrimaUpdateComponent implements OnInit {
  material: MateriaPrima = {
    lote: '',
    categoria_id: '',
    descricao: '',
    entrada: undefined!,
    quantidade: undefined!,
    custo: undefined!
  }
  constructor(private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  voltar(){

  }

  update(){

  }
  find(){
    const mpID = this.aRoute.snapshot.paramMap.get('mpid');
    
  }

  clear(){

  }
}
