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

  ngOnInit(): void {

    let alimentos = [
      {
         id: 1,
         name: "Abacate",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         qttCalories: 0,
         qttDaysFeed: 3,
         imageLink: "../../assets/Img/Abacate.jpeg"
       },
       {
        id: 2,
        name: "Maçã",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Maça.jpeg"
      },
      {
        id: 3,
        name: "Banana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Banana.jpeg"
      },
      {
        id: 5,
        name: "Melão",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Melao.jpeg"
      },
      {
        id: 6,
        name: "Pêssego",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Pessego.jpeg"
      },
      {
        id: 10,
        name: "Abacaxi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Abacaxi.jpeg"
      },
      {
        id: 10,
        name: "Melancia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Melancia.jpeg"
      },
      {
        id: 8,
        name: "Morango",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Morango.jpeg"
      },
      {
        id: 9,
        name: "Manga",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Manga.jpeg"
      },
      {
        id: 7,
        name: "Goiaba",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/goiaba.jpeg"
      },
      {
        id: 10,
        name: "Pera",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Pera.jpeg"
      },
      {
        id: 4,
        name: "Uva",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: "../../assets/Img/Uva.jpeg"
      }
    ];
    
    localStorage.setItem('alimentosStorage', JSON.stringify(alimentos));
    
  }
}
