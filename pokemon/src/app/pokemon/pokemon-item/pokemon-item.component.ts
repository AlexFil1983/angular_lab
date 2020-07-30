import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonDataService } from 'src/app/pokemon-data.service';
import { Pokemon } from '../pokemon.component';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  pokemon: Pokemon

  constructor(private route: ActivatedRoute,
    private pokemonDataService: PokemonDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.pokemon = this.pokemonDataService.getById(parseInt(params.id))
    })
  }

  onCatchPokemon = (id) => {
     this.pokemonDataService.onCatchPokemon(this.pokemon.id);
  }

}
