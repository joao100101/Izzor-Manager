import { Component, OnInit } from '@angular/core';
import { Usuario } from '../account.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Usuario = {
    nome: '',
    email: '',
    senha: ''
  }

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.teste();
  } 

}
