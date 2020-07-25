import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from './../pokemon.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
@Input() pokemon
  constructor() { }

  ngOnInit(): void {
  }
}
