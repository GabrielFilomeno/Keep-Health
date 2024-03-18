import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { };

  entrar() {

    if (!this.login.emailUsuario || !this.login.senhaUsuario) {
      alert('Por favor, preencha todos os campos de login.');
      return;
    }

  const dadosUsuarios = localStorage.getItem('dadosUsuario');

  if (dadosUsuarios) {
    const listaUsuarios = JSON.parse(dadosUsuarios);

    const usuarioValido = listaUsuarios.find((usuario: { emailUsuario: string; senhaUsuario: string; }) => 
      usuario.emailUsuario === this.login.emailUsuario && usuario.senhaUsuario === this.login.senhaUsuario
    );

    if (usuarioValido) {

      this.router.navigate(['/home']);
    } else {
      alert('Email ou senha incorretos.');
    }
  } else {
    alert('Não há usuários cadastrados.');
  }
}

redefinirSenha(emailUsuario: string) {
  const dadosUsuarios = localStorage.getItem('dadosUsuario');
  if (dadosUsuarios) {
    const listaUsuarios = JSON.parse(dadosUsuarios);
    const usuarioIndex = listaUsuarios.findIndex((usuario: any) => usuario.emailUsuario === emailUsuario);

    if (usuarioIndex !== -1) {
      confirm('Você deseja redefinir sua senha para a senha padrão? "a1b2c4d4"');
      listaUsuarios[usuarioIndex].senhaUsuario = 'a1b2c4d4';
      localStorage.setItem('dadosUsuario', JSON.stringify(listaUsuarios));
      alert('Sua senha foi redefinida para a senha padrão. Por favor, faça o login utilizando a nova senha: a1b2c4d4');
    } else {
      alert('Usuário não encontrado.');
    }
  } else {
    alert('Não há usuários cadastrados.');
  }
}

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

}
