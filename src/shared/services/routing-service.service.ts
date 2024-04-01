import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {

  constructor(private router: Router) { }
  navigateToCard(id: string): void {
    const cardsData = JSON.parse(localStorage.getItem('alimentosStorage') || '[]');
    const cardId = cardsData.find((card: any) => card.id === id);
    if (cardId) {
      this.router.navigate(['/card', id]);
    }
  }
}
