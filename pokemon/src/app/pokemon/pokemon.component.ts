import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/app/pokemon-data.service';


export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  catched: boolean;
  created: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemonData = this.pokemonDataService.getAll();
  status = '';

  constructor(private pokemonDataService: PokemonDataService) { }

  ngOnInit(): void {
  }


  toggle = true;
   getPokemonData = (data) => {
     this.status = '';
    this.pokemonData = this.pokemonDataService.getByName(data) 
    this.pokemonDataService.getByName(data).length === 0 ? this.status  =  'Pokemon not found. Try another one' : null ;
      }

      onCatchPokemon = (id) => {
        let pokemon = this.pokemonData.find(pokemon => pokemon.id === +id);
        pokemon.catched = !pokemon.catched;
        console.log(`${pokemon.name} был ${pokemon.catched ? "пойман" : "отпущен"} `);

      }

      
 
}
