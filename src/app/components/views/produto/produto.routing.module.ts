import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoPartesCreateComponent } from './produto-partes/produto-partes-create/produto-partes-create.component';
import { ProdutoPartesReadComponent } from './produto-partes/produto-partes-read/produto-partes-read.component';
import { ProdutoPartesUpdateComponent } from './produto-partes/produto-partes-update/produto-partes-update.component';
import { ProdutoReadComponent } from './produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { VariacoesAddComponent } from './variacoes/variacoes-add/variacoes-add.component';
import { VariacoesReadComponent } from './variacoes/variacoes-read/variacoes-read.component';

const produtoRoutes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(produtoRoutes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
