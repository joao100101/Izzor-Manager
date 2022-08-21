import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { mensagem } from 'src/app/app.component';
import { Class } from 'src/app/components/snackTypes';
import { MateriaPrima } from '../materia-prima.model';
import { MateriaPrimaService } from '../materia-prima.service';

@Component({
  selector: 'app-materia-prima-update',
  templateUrl: './materia-prima-update.component.html',
  styleUrls: ['./materia-prima-update.component.css']
})
export class MateriaPrimaUpdateComponent implements OnInit {
  catID: String = '';
  material: MateriaPrima = {
    id: undefined!,
    lote: '',
    categoria_id: '',
    descricao: '',
    entrada: undefined!,
    quantidade: undefined!,
    custo: undefined!
  }
  constructor(private router: Router, private aRoute: ActivatedRoute, private service: MateriaPrimaService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.catID = this.aRoute.snapshot.paramMap.get('id')!;
    this.find();
  }

  voltar() {
    this.router.navigate([`/estoque/categorias/${this.catID}/materiais`]);
  }

  update() {
    if (this.material.lote.length > 3 && this.material.descricao.length > 3 && this.material.custo >= 0 && this.material.entrada != undefined && this.material.lote.length > 0 && this.material.quantidade > 0) {
      this.service.update(this.material).subscribe(() => {
        this.voltar();
        mensagem('Material atualizado com sucesso.', Class.OK, this.snack);
      })
    } else {
      mensagem('Verifique se todos os campos estão preenchidos.', Class.ERRO, this.snack);
    }
  }
  find() {
    const mpID = this.aRoute.snapshot.paramMap.get('mpid');
    this.service.read(mpID!).subscribe(res => {
      this.material = res;
    })
  }

  clear() {

  }
}
