import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/components/snackTypes';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private route: Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.route.navigate(['categorias'])
  }

  create(): void {
    if (this.categoria.nome.length > 3) {
      this.service.create(this.categoria).subscribe(() => {
        this.service.mensagem('Categoria criada com sucesso!', Class.OK)
        this.route.navigate(['categorias'])
      }, err => {
        for (let i in err.error.messages) {
          this.service.mensagem(err.error.messages[i].message, Class.ERRO)
        }
      });
    }else{
      this.service.mensagem("Verifique o tamanho do nome.", Class.AVISO);
    }
  }
}
