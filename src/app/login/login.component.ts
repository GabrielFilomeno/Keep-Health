import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = {
    emailUsuario: '',
    senhaUsuario: ''
  };

  entrar() {
    if (this.login.emailUsuario && this.login.senhaUsuario) {
      console.log(this.login)
    } else {
      alert('Prencha os campos')
    }
  }

}
