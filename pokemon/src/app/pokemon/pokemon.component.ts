import { Component, OnInit } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  catched: boolean
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toggle = true;
 
}
