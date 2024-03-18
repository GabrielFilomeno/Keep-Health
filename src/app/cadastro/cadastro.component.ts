import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    data: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl('')
  })

  constructor(private router: Router) {};

  armazenarLocalStorage() {
    
    const novoUsuario = {
      nomeUsuario: this.form.value.nome,
      emailUsuario: this.form.value.email,
      dataUsuario: this.form.value.data,
      senhaUsuario: this.form.value.senha
    };

    const dadosUsuario = localStorage.getItem('dadosUsuario'); 

    let usuario;
    
    if (dadosUsuario) {
      usuario = JSON.parse(dadosUsuario);

    } else {
      usuario = [];
    }

    usuario.push(novoUsuario);

    localStorage.setItem('dadosUsuario', JSON.stringify(usuario));
    console.log(usuario);


    }
  

  cadastrar() {

    if (!this.form.value.nome || !this.form.value.email || !this.form.value.data || !this.form.value.senha || !this.form.value.confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (this.form.value.senha === this.form.value.confirmarSenha) { 
    this.armazenarLocalStorage();
    alert('Cadastro realizado, faça o login com seu email e senha.')
    this.router.navigate(['/login']);
    }  else {
      alert("Senha e Confirmar senha não estão iguais");
    }
  };

  voltar() {
  this.router.navigate(['/login']);
  }
}
