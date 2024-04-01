import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item: {name: string; imageLink: string; description: string;} | undefined;
  @Input() novaLista: {name: string; imageLink: string; description: string;} | undefined;
}
