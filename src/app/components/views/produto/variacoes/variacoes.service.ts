import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Class } from 'src/app/components/snackTypes';
import { environment } from 'src/environments/environment';
import { Produto } from '../produto.model';

@Injectable({
  providedIn: 'root'
})
export class VariacoesService {

  private baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  updateVariacoes(id: String, prod: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/dbprodutos/${id}`
    return this.http.put<Produto>(url, prod);
  }

  findVariacoes(id: String): Observable<Produto> {
    const url = `${this.baseUrl}/dbprodutos/${id}`
    return this.http.get<Produto>(url);
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


