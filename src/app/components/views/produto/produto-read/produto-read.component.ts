import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
export class ProdutoReadComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('paginator') paginator?: MatPaginator;

  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  pageEvent?: PageEvent;


  displayedColumns: string[] = ['id', 'categoria', 'nome', 'descricao', 'custo', 'valor', 'acoes'];
  produtos: Produto[] = []
  teste: Subscription
  ID: String = '';
  dataSource: any;

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getArray() {
    this.service.findByCategoryID(this.ID).subscribe((response) => {
      this.dataSource = new MatTableDataSource<Produto>(response);
      this.dataSource.paginator = this.paginator;
      this.produtos = response;
      this.totalSize = this.produtos.length;
      this.iterator();
    });
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.produtos.slice(start, end);
    this.dataSource = part;
  }

  constructor(private dialog: MatDialog, private service: ProdutoService, private aRoute: ActivatedRoute, private router: Router) { this.teste = null! }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.produtos);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.ID = this.aRoute.snapshot.paramMap.get('id')!;
    this.getArray();
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
