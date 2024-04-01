import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css',
  imports: [CardComponent, CommonModule]
})
export class DietDetailComponent implements OnInit {

  card: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id'];
    const cards = localStorage.getItem('alimentosStorage');
    if (cards) {
      let listCards = JSON.parse(cards);
      this.card = listCards.find((card: any) => card.id === +cardId);
      console.log(this.card)
    }
  }
  voltar() {
    this.router.navigate(['/diet'])
  }
}
