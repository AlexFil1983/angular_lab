import { Component, OnInit, Input } from '@angular/core';
import { PokemonDataService } from 'src/app/pokemon-data.service';
import { PokemonSearchComponent} from 'src/app/pokemon/pokemon-search/pokemon-search.component'

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})

export class PokemonCardsComponent implements OnInit {
  @Input() toggle : boolean
  constructor(private pokemonDataService: PokemonDataService ) { }

  ngOnInit(): void {
  }

  consoleStatus = (event) => {
    let pokemon = this.pokemonDataService.pokemonData.filter(item => item.id == event.target.id)[0];
    pokemon.catched = !pokemon.catched;
    let pokemon_status =  pokemon.catched ? "пойман" : "отпущен"
    console.log(`${pokemon.name} был ${pokemon_status} `);
      }
}
