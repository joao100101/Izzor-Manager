import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasAddComponent } from './vendas-add/vendas-add.component';
import { VendasReadComponent } from './vendas-read/vendas-read.component';

const vendaRoutes: Routes = [
    {
        path: 'vendas',
        component: VendasReadComponent
    },
    {
        path: 'vendas/create',
        component: VendasAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(vendaRoutes)],
    exports: [RouterModule]
})
export class VendasRoutingModule { }
