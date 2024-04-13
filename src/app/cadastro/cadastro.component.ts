import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../../shared/services/address.service';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AlertaComponent } from './alerta/alerta.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastModule, MatButtonModule, CalendarModule, InputTextModule, PasswordModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    data: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required),
    altura: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(3)]),
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
    private addressService: AddressService,
    private messageService: MessageService,
    public matDialog: MatDialog
  ) { };

  armazenarLocalStorage() {

    const novoUsuario = {
      idUsuario: 0,
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

    novoUsuario.idUsuario = usuario.length +1;
    usuario.push(novoUsuario);

    localStorage.setItem('dadosUsuario', JSON.stringify(usuario));
  }

  clickGetCep() {

    if (this.form.controls.cep.errors) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preencha o CEP para procurar.' });
    } else if (this.form.value.cep) {
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
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Digite seu CEP novamente.' });
            this.form.controls['cep'].setValue('');
          }
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'CEP invalido.' });
          this.form.controls['cep'].setValue('');
          console.error(error);
        }
      });
    };
  };

  cadastrar() {
    if (this.form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor, verifique se os campos estão preenchidos corretamente.' });
    } else if (this.endereco.cep == String) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Clique em Procurar CEP para confirmar seu CEP.' });
    } else  {
      this.armazenarLocalStorage();
      this.matDialog.open(AlertaComponent);
      this.router.navigate(['/login']);
    }
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  voltar() {
    this.router.navigate(['/login']);
  }
}
