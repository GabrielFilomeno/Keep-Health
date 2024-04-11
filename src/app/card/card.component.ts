import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item: {nome: string; linkImagem: string; descricao: string;} | undefined;
  @Input() novaLista: {nome: string; linkImagem: string; descricao: string;} | undefined;
}
