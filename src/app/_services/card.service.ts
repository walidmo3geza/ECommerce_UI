import { Injectable } from '@angular/core';
import { CardDetails } from '../_models/CardDetails';
import { CardHeader } from '../_models/CardHeader';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  Card!: CardHeader
  cardDetials!: CardDetails

  constructor() { }

  newCardDetials(producs: Product) {

  }

  AddCard(carddetails: CardDetails[]) {
    this.Card.userid = 1
    for (let i = 0; i < carddetails.length; i++) {
      this.Card.total += carddetails[i].total
    }
    this.Card.cardproducts = carddetails
  }
}
