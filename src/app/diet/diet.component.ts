import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DietDetailComponent } from './diet-detail/diet-detail.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, DietDetailComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {

  listaAlimentos = [{
    name: '',
    imageLink: '',
    description: '',
    id: '',
  }]

  constructor(private router: Router) {
    const alimentos: any = localStorage.getItem('alimentosStorage');
  
      if (alimentos) {
        this.listaAlimentos = JSON.parse(alimentos);
  }
}
  search: string | undefined;
  resetLista: any;

  ngOnInit(): void {
    this.resetLista = this.listaAlimentos;
  }

  pesquisar() {
    if (!this.search) {
      alert('Preencha o campo para pesquisar');
    } else {
      let resultado = this.listaAlimentos.filter(item => item.name === this.search);
      if (resultado.length === 0) {
        alert('Alimento não encontrado');
      } else {
        this.listaAlimentos = resultado;
        this.search = '';
      }
    }
  }

  resetarPesquisa() {
    this.listaAlimentos = this.resetLista;
  }

  onCardClick(cardId: string): void {
    this.router.navigate(['diet/diet-detail', cardId]);
  }
}

