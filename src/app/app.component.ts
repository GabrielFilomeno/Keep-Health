import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Keep-Health';

  constructor() {}

  ngOnInit(): void {

    let dietas = [
      {
        "id": 1,
        "nome": "Dieta Mediterrânea",
        "descricao": "Rica em frutas, vegetais, peixes e azeite de oliva.",
        "calorias": 1800,
        "refeicoes": 5,
        "linkImagem": "../../assets/Img/imagem-mediterranea.jpg"
      },
      {
        "id": 2,
        "nome": "Dieta Paleo",
        "descricao": "Baseada em carnes magras, peixes, frutas e vegetais.",
        "calorias": 1600,
        "refeicoes": 4,
        "linkImagem": "../../assets/Img/imagem-paleo.jpg"
      },
      {
        "id": 3,
        "nome": "Dieta Vegana",
        "descricao": "Exclui todos os produtos de origem animal.",
        "calorias": 1500,
        "refeicoes": 6,
        "linkImagem": "../../assets/Img/imagem-vegana.jpg"
      },
      {
        "id": 4,
        "nome": "Dieta Cetogênica",
        "descricao": "Alta em gorduras, moderada em proteínas e baixa em carboidratos.",
        "calorias": 1400,
        "refeicoes": 3,
        "linkImagem": "../../assets/Img/imagem-cetogenica.jpg"
      },
      {
        "id": 5,
        "nome": "Dieta de Baixo Índice Glicêmico",
        "descricao": "Foca em alimentos que têm um baixo índice glicêmico.",
        "calorias": 1700,
        "refeicoes": 5,
        "linkImagem": "../../assets/Img/imagem-baixoig.jpg"
      },
      {
        "id": 6,
        "nome": "Dieta Atkins",
        "descricao": "Dieta baixa em carboidratos, enfatizando proteínas e gorduras.",
        "calorias": 1600,
        "refeicoes": 4,
        "linkImagem": "../../assets/Img/imagem-atkins.jpg"
      },
      {
        "id": 7,
        "nome": "Dieta DASH",
        "descricao": "Projetada para combater a hipertensão, rica em frutas, vegetais e grãos integrais.",
        "calorias": 2000,
        "refeicoes": 5,
        "linkImagem": "../../assets/Img/imagem-dash.jpg"
      },
      {
        "id": 8,
        "nome": "Dieta Flexitariana",
        "descricao": "Uma abordagem mais flexível ao vegetarianismo.",
        "calorias": 1800,
        "refeicoes": 5,
        "linkImagem": "../../assets/Img/imagem-flexitariana.jpg"
      },
      {
        "id": 9,
        "nome": "Dieta Volumétrica",
        "descricao": "Enfatiza alimentos que são densos em nutrientes, mas baixos em calorias.",
        "calorias": 1500,
        "refeicoes": 5,
        "linkImagem": "../../assets/Img/imagem-volumetrica.jpg"
      },
      {
        "id": 10,
        "nome": "Dieta Zona",
        "descricao": "Divide as refeições em 40% de carboidratos, 30% de proteínas e 30% de gorduras.",
        "calorias": 1600,
        "refeicoes": 4,
        "linkImagem": "../../assets/Img/imagem-zona.jpg"
      }
    ];
    
    localStorage.setItem('dietasStorage', JSON.stringify(dietas));
    
  }
}
