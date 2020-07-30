import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PokemonDataService } from 'src/app/pokemon-data.service';
import { PokemonSearchComponent} from 'src/app/pokemon/pokemon-search/pokemon-search.component';
import { Pokemon } from './../pokemon.component';


@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})



export class PokemonCardsComponent implements OnInit {

  @Input() toggle : boolean
  @Input() pokemonData
  @Output() onCatchPokemon: EventEmitter<number> = new EventEmitter()

  constructor() { 
    
  }

  ngOnInit(): void {

  }
  consoleStatus = (event) => {
    this.onCatchPokemon.emit(event.target.id);
      }   

}

