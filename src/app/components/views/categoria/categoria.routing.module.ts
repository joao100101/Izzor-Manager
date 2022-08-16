import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './categoria-update/categoria-update.component';

const categoriaRoutes: Routes = [
    {
        path: 'categorias',
        component: CategoriaReadComponent,
        children: [
            {
                path: 'create',
                component: CategoriaCreateComponent
            },
            {
                path: 'update/:id',
                component: CategoriaUpdateComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(categoriaRoutes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule { }
