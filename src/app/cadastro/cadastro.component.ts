import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../../shared/services/address.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required),
    altura: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    confirmarSenha: new FormControl('', Validators.required)
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
