import { Component, Pipe } from '@angular/core';
import { CmParaMetrosPipe } from '../../shared/pipes/cm-para-metros.pipe';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CmParaMetrosPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  nome = '';
  email = '';
  data = '';
  peso = '';
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
}
