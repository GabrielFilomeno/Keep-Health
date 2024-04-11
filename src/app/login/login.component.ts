import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, PasswordModule, ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login = {
    emailUsuario: '',
    senhaUsuario: ''
  };

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { };

  entrar() {
    const dadosUsuarios = localStorage.getItem('dadosUsuario');

    if (!this.login.emailUsuario) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preencha o email.' });
    } else if (!this.login.senhaUsuario) {
      
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preencha a senha.' });

    } else if (dadosUsuarios) {

    const listaUsuarios = JSON.parse(dadosUsuarios);

    const usuarioValido = listaUsuarios.find((usuario: { emailUsuario: string; senhaUsuario: string; }) => 
      usuario.emailUsuario === this.login.emailUsuario && usuario.senhaUsuario === this.login.senhaUsuario
  );
  if (usuarioValido) {

    this.router.navigate(['/home']);
  } else {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email ou senha incorretos.' });
  }
} else {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Não há usuários cadastrados.' });
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
