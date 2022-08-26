import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Class } from './components/snackTypes';
import { AuthService } from './components/views/account/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  logado: boolean = false;
  title = 'izzor-manager';


  constructor(private auth: AuthService){}

  ngOnInit(): void {
      this.logado = this.auth.isLogado();
  }


}

function mensagem(str: String, classe: Class, _snack: MatSnackBar): void {
    _snack.open(`${str}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000,
    panelClass: Class[classe]
  });
}
export {mensagem}
