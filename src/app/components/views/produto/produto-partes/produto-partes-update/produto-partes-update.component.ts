import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto.model';
import { ProdutoService } from '../../produto.service';
import { Parte } from '../partes.model';

@Component({
  selector: 'app-produto-partes-update',
  templateUrl: './produto-partes-update.component.html',
  styleUrls: ['./produto-partes-update.component.css']
})
export class ProdutoPartesUpdateComponent implements OnInit {
  prodID: String = '';
  catID: String = '';
  partID: String = '';
  produto: Produto = {
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
  parte: Parte = {
    id: -1,
    Nome: ''
  }
  constructor(private router: Router, private aRoute: ActivatedRoute, private service: ProdutoService) { }

  ngOnInit(): void {
    this.prodID = this.aRoute.snapshot.paramMap.get('pid')!;
    this.catID = this.aRoute.snapshot.paramMap.get('id')!;
    this.partID = this.aRoute.snapshot.paramMap.get('partID')!;
    this.find();
  }

  voltar() {
    this.router.navigate([`categorias/${this.catID}/produtos/${this.prodID}/partes`])
  }
  update() {
    
  }
  find() {
    this.service.findById(this.prodID).subscribe((res) => {
      this.produto = res;
      this.parte = this.getParte(this.partID)!;
    })
  }
  getParte(id: String) {
    for (let i of this.produto.partes) {
      if (i.id == Number(id)) {
        return i;
      }
    }
    return;
  }
}
