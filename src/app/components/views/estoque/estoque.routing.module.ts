import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueCreateComponent } from './estoque-create/estoque-create.component';
import { EstoqueReadComponent } from './estoque-read/estoque-read.component';
import { EstoqueUpdateComponent } from './estoque-update/estoque-update.component';

const estoqueRoutes: Routes = [
  {
    path: 'estoque',
    component: EstoqueReadComponent
  },
  {
    path: 'estoque/categorias/create',
    component: EstoqueCreateComponent
  },
  {
    path:'estoque/categorias/update/:id',
    component: EstoqueUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(estoqueRoutes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
