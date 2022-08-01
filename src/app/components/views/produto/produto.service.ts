import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Class } from '../../snackTypes';
import { Categoria } from '../categoria/categoria.model';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll(): Observable<Produto[]> {
    const url = `${this.baseUrl}/dbprodutos`
    return this.http.get<Produto[]>(url);
  }

  findByCategoryID(id: String): Observable<Produto[]> {
    const url = `${this.baseUrl}/dbprodutos?categoria_id=${id}`
    return this.http.get<Produto[]>(url);
  }

  findById(id: String): Observable<Produto> {
    const url = `${this.baseUrl}/dbprodutos/${id}`
    return this.http.get<Produto>(url);
  }

  create(Produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/dbprodutos`
    return this.http.post<Produto>(url, Produto);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/dbprodutos/${id}`
    return this.http.delete<void>(url);
  }

  update(id: String, Produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/dbprodutos/${id}`
    return this.http.put<Produto>(url, Produto);
  }

  findCategoryName(cat_id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/dbcategorias/${cat_id}`
    return this.http.get<Categoria>(url);
  }

  mensagem(str: String, classe: Class): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: Class[classe]
    });
  }
}
