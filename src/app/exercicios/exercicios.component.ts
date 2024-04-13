import { Component, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, Location } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardAtividadesComponent } from './card-atividades/card-atividades.component';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [CardAtividadesComponent, DialogModule, CommonModule, OverlayPanelModule, CalendarModule, FormsModule, InputNumberModule, ToastModule],
  providers: [MessageService],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.scss'
})
export class ExerciciosComponent {
  @ViewChild(OverlayPanel)
  op: OverlayPanel[] = [];
  idOverlay!: number;

  data: Date | undefined;
  distancia: number | undefined;
  tempoAtividade: Date = new Date(2024, 1, 1 , 0, 0, 0, 0);

  idAtividade: string | undefined;
  visible: boolean = false;

  listaAtividades: any;

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {

    let atividadesLocalStorage: any[] = [];
    let atividadesJson = JSON.stringify(atividadesLocalStorage)

    if (!localStorage.getItem('atividadesLocalStorage')) {
      localStorage.setItem('atividadesLocalStorage', atividadesJson)
    }
    this.renderizarLista()
  }

  showDialog() {
    this.visible = true;
  }

  capturarId(id: string) {
    this.idAtividade = id
  }

  identificarOverlay(id: number, op: OverlayPanel) {
    this.idOverlay = id;
    this.op[id] = op;
  }

  fecharOverlay(id: number) {
    this.visible = false;
    this.op[id].hide();
  }

  renderizarLista() {
    const listaAtividadesJson: any = localStorage.getItem('atividadesLocalStorage');

    if (listaAtividadesJson) {
      this.listaAtividades = JSON.parse(listaAtividadesJson);
    }
  }

  salvarAtividade() {

    if (this.data === null || this.data === undefined) {
      this.messageService.add({ severity: 'info', summary: 'erro', detail: 'Coloque a data para salvar a atividade!' });
    } else {
      let filtrarAtividade = this.atividades.find(atividade => atividade.id === this.idAtividade);

      if (filtrarAtividade) {
        filtrarAtividade.data = this.data;

        if (this.distancia) {
          filtrarAtividade.distancia = this.distancia;
        };

        if (this.tempoAtividade) {
          filtrarAtividade.tempoAtividade = this.tempoAtividade;
        }

        const atividadesLocalStorage = localStorage.getItem('atividadesLocalStorage');

        if (atividadesLocalStorage) {

          let listaAtividades = JSON.parse(atividadesLocalStorage);
          listaAtividades.push(filtrarAtividade)

          localStorage.setItem('atividadesLocalStorage', JSON.stringify(listaAtividades));
          filtrarAtividade.distancia = 0;
          filtrarAtividade.tempoAtividade = new Date(2024, 1, 1 , 0, 0, 0, 0);
        }
        
        this.renderizarLista()
        this.fecharOverlay(this.idOverlay)
        this.data = undefined;
        this.distancia = undefined;
        this.tempoAtividade = new Date(2024, 1, 1 , 0, 0, 0, 0);
      }
    }
  }

  atividades = [
    {
      id: '1',
      atividade: "Capoeira",
      linkImagem: "../../assets/Img/capoeira.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '2',
      atividade: "Skate",
      linkImagem: "../../assets/Img/skate.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '3',
      atividade: "Dança",
      linkImagem: "../../assets/Img/dança.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '4',
      atividade: "Caminhada",
      linkImagem: "../../assets/Img/caminhada.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '5',
      atividade: "Corrida",
      linkImagem: "../../assets/Img/corrida.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '6',
      atividade: "Natação",
      linkImagem: "../../assets/Img/natação.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '7',
      atividade: "Ciclismo",
      linkImagem: "../../assets/Img/ciclismo.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '8',
      atividade: "Musculação",
      linkImagem: "../../assets/Img/musculacao.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '9',
      atividade: "Yoga",
      linkImagem: "../../assets/Img/yoga.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    },
    {
      id: '10',
      atividade: "Pilates",
      linkImagem: "../../assets/Img/pilates.jpg",
      data: new Date,
      distancia: 0,
      tempoAtividade: new Date
    }
  ];

}