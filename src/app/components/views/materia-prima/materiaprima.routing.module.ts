import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaPrimaAddComponent } from './materia-prima-add/materia-prima-add.component';
import { MateriaPrimaReadComponent } from './materia-prima-read/materia-prima-read.component';

const materiaPrimaRoutes: Routes = [
  {
    path: 'estoque/categorias/:id/add',
    component: MateriaPrimaAddComponent
  },
  {
    path: 'estoque/categorias/:id/materiais',
    component: MateriaPrimaReadComponent
  },
  {
    path: 'estoque/categorias/:id/materiais/add',
    component: MateriaPrimaAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(materiaPrimaRoutes)],
  exports: [RouterModule]
})
export class MateriaPrimaRoutingModule { }
