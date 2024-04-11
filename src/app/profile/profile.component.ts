import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule, ButtonModule, OverlayPanelModule, InputNumberModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  nome = '';
  email = '';
  data = '';
  peso: number | undefined;
  altura = 0;
  endereco = {
    cep: String,
    logradouro: String,
    bairro: String,
    localidade: String,
    uf: String
  };

  constructor() {
    const dadosUsuarios: any = localStorage.getItem('dadosUsuario');

    if (dadosUsuarios) {
      const listaUsuarios = JSON.parse(dadosUsuarios);
      const usuario = listaUsuarios[0];
      this.nome = usuario.nomeUsuario;
      this.email = usuario.emailUsuario;
      this.data = usuario.dataUsuario;
      this.peso = usuario.pesoUsuario;
      this.altura = usuario.alturaUsuario;
      this.endereco = usuario.cepUsuario;
    }
  }

  atualizarPeso() {
    const dadosUsuarios: any = localStorage.getItem('dadosUsuario');

    if (dadosUsuarios) {
      let listaUsuarios = JSON.parse(dadosUsuarios);
      console.log(listaUsuarios)
      listaUsuarios[0].pesoUsuario = this.peso;
      localStorage.setItem('dadosUsuario', JSON.stringify(listaUsuarios));
    }
  }
}
