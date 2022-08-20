import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/account/login/login.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { EstoqueCreateComponent } from './components/views/estoque/estoque-create/estoque-create.component';
import { EstoqueReadComponent } from './components/views/estoque/estoque-read/estoque-read.component';
import { EstoqueUpdateComponent } from './components/views/estoque/estoque-update/estoque-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { MateriaPrimaAddComponent } from './components/views/materia-prima/materia-prima-add/materia-prima-add.component';
import { MateriaPrimaReadComponent } from './components/views/materia-prima/materia-prima-read/materia-prima-read.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoPartesCreateComponent } from './components/views/produto/produto-partes/produto-partes-create/produto-partes-create.component';
import { ProdutoPartesReadComponent } from './components/views/produto/produto-partes/produto-partes-read/produto-partes-read.component';
import { ProdutoPartesUpdateComponent } from './components/views/produto/produto-partes/produto-partes-update/produto-partes-update.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { VariacoesAddComponent } from './components/views/produto/variacoes/variacoes-add/variacoes-add.component';
import { VariacoesReadComponent } from './components/views/produto/variacoes/variacoes-read/variacoes-read.component';
import { VendasAddComponent } from './components/views/venda/vendas-add/vendas-add.component';
import { VendasReadComponent } from './components/views/venda/vendas-read/vendas-read.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'estoque',
    component: EstoqueReadComponent
  },
  {
    path: 'estoque/categorias/create',
    component: EstoqueCreateComponent
  },
  {
    path: 'estoque/categorias/update/:id',
    component: EstoqueUpdateComponent
  },
  {
    path: 'estoque/categorias/:id/materiais',
    component: MateriaPrimaReadComponent
  },
  {
    path: 'estoque/categorias/:id/materiais/add',
    component: MateriaPrimaAddComponent
  },
  {
    path: 'categorias/:id/produtos',
    component: ProdutoReadComponent
  },
  {
    path: 'categorias/:id/produtos/create',
    component: ProdutoCreateComponent
  },
  {
    path: 'categorias/:id/produtos/produtos/update/:pid',
    component: ProdutoUpdateComponent
  },
  {
    path: 'categorias/:id/produtos/:pid/variacoes',
    component: VariacoesReadComponent
  },
  {
    path: 'categorias/:id/produtos/:pid/variacoes/create',
    component: VariacoesAddComponent
  },
  {
    path: 'categorias/:id/produtos/:pid/partes',
    component: ProdutoPartesReadComponent
  },
  {
    path: 'categorias/:id/produtos/:pid/partes/create',
    component: ProdutoPartesCreateComponent
  },
  {
    path: 'categorias/:id/produtos/:pid/partes/:partID/edit',
    component: ProdutoPartesUpdateComponent
  },
  {
    path: 'vendas',
    component: VendasReadComponent
  },
  {
    path: 'vendas/create',
    component: VendasAddComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
