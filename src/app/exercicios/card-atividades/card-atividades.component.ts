import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-atividades',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './card-atividades.component.html',
  styleUrl: './card-atividades.component.scss',
})
export class CardAtividadesComponent {
  @Input() atividades: {
    id: string,
    atividade: string,
    linkImagem: string,
    data: Date,
    distancia: number,
    tempoAtividade: string
  } | any;

  @Output() chamarRenderizarLista = new EventEmitter<void>();
  
  renderizarLista() {
    this.chamarRenderizarLista.emit();
  };

  listaAtividades = [];

  pegarLocalStorage() {
    const listaAtividadesJson = localStorage.getItem('atividadesLocalStorage');
    if (listaAtividadesJson) {
      this.listaAtividades = JSON.parse(listaAtividadesJson);
    };
  };

  enviarLocalStorage(lista: Array<any>) {
    localStorage.setItem('atividadesLocalStorage', JSON.stringify(lista));
  };

  fecharAtividade(teste: object) {
    this.pegarLocalStorage();
    this.listaAtividades = this.listaAtividades.filter(atividade =>   JSON.stringify(atividade) !== JSON.stringify(teste) );
    this.enviarLocalStorage(this.listaAtividades);
    this.renderizarLista();
  };
};
