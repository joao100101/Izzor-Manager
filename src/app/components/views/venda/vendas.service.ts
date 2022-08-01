import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Class } from '../../snackTypes';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private _snack: MatSnackBar) { }


  mensagem(str: String, classe: Class): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: Class[classe]
    });
  }
}
