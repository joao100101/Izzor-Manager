import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProdutoDeleteComponent } from '../produto-delete/produto-delete.component';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
var Prod_ID = ''
@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'categoria', 'nome', 'descricao', 'custo', 'valor', 'acoes'];
  produtos: Produto[] = []
  teste: Subscription
  ID: String = '';



  constructor(private dialog: MatDialog,private service: ProdutoService, private aRoute: ActivatedRoute, private router: Router) { this.teste = null! }

  ngOnInit(): void {
    this.ID = this.aRoute.snapshot.paramMap.get('id')!;
    this.teste = this.findAllByCategory();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.teste.unsubscribe();
  }

  findAllByCategory() {
    return this.service.findByCategoryID(this.ID).subscribe(resposta => {
      this.produtos = resposta;
    })
  }

  public getCategoriaByID(id?: String) {
    return null;
  }
  goToProdutoCreate() {
    this.router.navigate([`categorias/${this.ID}/produtos/create`])
  }

  deleteProduto(id?: any) {
    Prod_ID = id;
    this.openDialog('0ms', '0ms');
  }
  static getId() {
    return Prod_ID;
  }


  //Abre uma caixa de dialogo para confirmar se deseja ou não deletar a categoria
  //O conteudo mostrado na caixa de dialogo é o que está no Componente CategoriaDelete
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutoDeleteComponent, {
      width: '40rem',
      panelClass: "custom",
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

}
