import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CurrencyMaskModule } from "ng2-currency-mask";




import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/views/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { VendasReadComponent } from './components/views/venda/vendas-read/vendas-read.component';
import { VariacoesReadComponent } from './components/views/produto/variacoes/variacoes-read/variacoes-read.component';
import { VariacoesAddComponent } from './components/views/produto/variacoes/variacoes-add/variacoes-add.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { ProdutoPartesReadComponent } from './components/views/produto/produto-partes/produto-partes-read/produto-partes-read.component';
import { ProdutoPartesCreateComponent } from './components/views/produto/produto-partes/produto-partes-create/produto-partes-create.component';
import { ProdutoPartesUpdateComponent } from './components/views/produto/produto-partes/produto-partes-update/produto-partes-update.component';
import { VendasAddComponent } from './components/views/venda/vendas-add/vendas-add.component';
import { MateriaPrimaReadComponent, MateriaPrimaRemoveComponent } from './components/views/materia-prima/materia-prima-read/materia-prima-read.component';
import { MateriaPrimaAddComponent } from './components/views/materia-prima/materia-prima-add/materia-prima-add.component';
import { MateriaPrimaUpdateComponent } from './components/views/materia-prima/materia-prima-update/materia-prima-update.component';
import { EstoqueReadComponent } from './components/views/estoque/estoque-read/estoque-read.component';
import { EstoqueCreateComponent } from './components/views/estoque/estoque-create/estoque-create.component';
import { EstoqueUpdateComponent } from './components/views/estoque/estoque-update/estoque-update.component';
import { AccountCreateComponent } from './components/views/account/account-create/account-create.component';
import { LoginComponent } from './components/views/account/login/login.component';
import { RecoveryComponent } from './components/views/account/recovery/recovery.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { AuthService } from './components/views/account/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaCreateComponent,
    CategoriaReadComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    ProdutoDeleteComponent,
    ProdutoUpdateComponent,
    VendasReadComponent,
    VariacoesReadComponent,
    VariacoesAddComponent,
    PageNotFoundComponent,
    ProdutoPartesReadComponent,
    ProdutoPartesCreateComponent,
    ProdutoPartesUpdateComponent,
    VendasAddComponent,
    MateriaPrimaReadComponent,
    MateriaPrimaAddComponent,
    MateriaPrimaUpdateComponent,
    EstoqueReadComponent,
    EstoqueCreateComponent,
    EstoqueUpdateComponent,
    AccountCreateComponent,
    LoginComponent,
    RecoveryComponent,
    MateriaPrimaRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CurrencyMaskModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
