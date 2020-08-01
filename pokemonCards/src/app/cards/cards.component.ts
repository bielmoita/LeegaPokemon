import { Component, OnInit } from '@angular/core';
import { CardsService } from '../service/cards.service';
import { Cards } from '../model/Cards';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  listaCards: Cards[];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

  findAllCards(){
    this.cardsService.getAllCards().subscribe(
      (resp: Cards[])=>{
        this.listaCards = resp
      })
  }

}
