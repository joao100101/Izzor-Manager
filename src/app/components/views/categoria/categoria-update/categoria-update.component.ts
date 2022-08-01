import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { CategoriaReadComponent } from '../categoria-read/categoria-read.component';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

var ID = '';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  constructor(private service: CategoriaService, private router: Router, private activeRoute: ActivatedRoute) { }

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  ngOnInit(): void {
    ID = String(this.activeRoute.snapshot.paramMap.get('id'));
    this.findById(ID)
  }

  findById(id: String) {
    this.service.findById(id).subscribe((response) => {
      this.categoria = response;
    });
  }

  navigate(path?: String): void {
    this.router.navigate([path]);
  }

  update(): void {
    if (this.categoria.nome.length >= 3) {
      this.service.update(ID, this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
        this.service.mensagem('Categoria atualizada com sucesso.', Class.OK);
      }, err => {
        console.log(err);
      });
    }else{
      this.service.mensagem('Verifique o tamanho do nome da categoria.', Class.AVISO)
    }
  }
}
