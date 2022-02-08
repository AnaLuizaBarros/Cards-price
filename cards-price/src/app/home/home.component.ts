import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games = [
    {id: 0, name: 'Todas'},
    {id: 1, name: 'Magic'},
    {id: 2, name: 'Yu-Gi-Oh!'},
    {id: 3, name: 'Pokémon TCG'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
