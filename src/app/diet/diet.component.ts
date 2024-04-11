import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, DietDetailComponent, ToastModule, ButtonModule, InputTextModule],
  providers: [MessageService],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {

  listaDietas = [{
    nome: '',
    linkImagem: '',
    descricao: '',
    id: '',
  }]

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
    const alimentos: any = localStorage.getItem('dietasStorage');
  
      if (alimentos) {
        this.listaDietas = JSON.parse(alimentos);
  }
}
  search: string | undefined;
  resetLista: any;

  ngOnInit(): void {
    this.resetLista = this.listaDietas;
  }

  pesquisar() {
    if (!this.search) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preencha o campo para pesquisar.' });
    } else {
      const textoNormalizado = this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  
      let resultado = this.listaDietas.filter(item => 
        item.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === textoNormalizado
      );
  
      if (resultado.length === 0) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Dieta não encontrado.' });
      } else {
        this.listaDietas = resultado;
        this.search = '';
      }
    }
  }
  

  resetarPesquisa() {
    this.listaDietas = this.resetLista;
  }

  onCardClick(cardId: string): void {
    this.router.navigate(['diet/diet-detail', cardId]);
  }
}

