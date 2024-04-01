import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../shared/services/address.service';

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
    peso: new FormControl(''),
    altura: new FormControl(''),
    cep: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl('')
  });

  endereco = {
    cep: String,
    logradouro: String,
    bairro: String,
    localidade: String,
    uf: String
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private addressService: AddressService
  ) { };

  armazenarLocalStorage() {

    const novoUsuario = {
      nomeUsuario: this.form.value.nome,
      emailUsuario: this.form.value.email,
      dataUsuario: this.form.value.data,
      pesoUsuario: this.form.value.peso,
      alturaUsuario: this.form.value.altura,
      cepUsuario: this.endereco,
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
  }

  clickGetCep() {

    if (this.form.value.cep) {
      this.addressService.getCep(this.form.value.cep).subscribe({
        next: (dados) => {
          if (confirm("Seu endereco esta correto?" + "\n"
            + "CEP: " + dados.cep + "\n"
            + "Logradouro: " + dados.logradouro + "\n"
            + "Bairro: " + dados.bairro + "\n"
            + "Localidade: " + dados.localidade + "\n"
            + "UF: " + dados.uf)) {
            this.endereco = {
              cep: dados.cep,
              logradouro: dados.logradouro,
              bairro: dados.bairro,
              localidade: dados.localidade,
              uf: dados.uf
            };
          } else {
            alert("Digite novamente");
            this.form.controls['cep'].setValue('');
          }
        },
        error: (error) => {
          alert("CEP invalido!")
          this.form.controls['cep'].setValue('');
          console.error(error);
        }
      });
    };
  };


  cadastrar() {

    if (!this.form.value.nome || !this.form.value.email || !this.form.value.data || !this.form.value.senha || !this.form.value.confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (this.endereco.cep == String) {
      alert("Clique em Procurar CEP para confirmar seu CEP")
    } else {
      if (this.form.value.senha === this.form.value.confirmarSenha) {
        this.armazenarLocalStorage();
        alert('Cadastro realizado, faça o login com seu email e senha.')
        this.router.navigate(['/login']);
      } else {
        alert("Senha e Confirmar senha não estão iguais");
      }
    }
  };

  voltar() {
    this.router.navigate(['/login']);
  }
}
