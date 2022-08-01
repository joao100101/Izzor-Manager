import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';
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
    path:'categorias/:id/produtos',
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
    path: 'vendas',
    component: VendasReadComponent
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
    path: 'vendas/create',
    component: VendasAddComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
