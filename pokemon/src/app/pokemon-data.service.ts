import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor() { }
  
  pokemonData = [
    {name: 'Bulbasaur', id: 1, damage: 20, catched: false },
    {name: 'Ivysaur', id: 2, damage: 55, catched: false },
    {name: 'Venusaur', id: 3, damage: 36, catched: false },
    {name: 'Charmander', id: 4, damage: 43, catched: false },
    {name: 'Charmeleon', id: 5, damage: 67, catched: false },
    {name: 'Charizard', id: 6, damage: 53, catched: false },
    {name: 'Squirtle', id: 7, damage: 23, catched: false },
    {name: 'Wartortle', id: 8, damage: 44, catched: false },
    {name: 'Blastoise', id: 9, damage: 51, catched: false },
    {name: 'Caterpie', id: 10, damage: 60, catched: false },
    {name: 'Metapod', id: 11, damage: 56, catched: false },
    {name: 'Butterfree', id: 12, damage: 15, catched: false},
  ];

  getAll = () => {
    return (this.pokemonData);
  }

  getByName = (name) => {
    // console.log(this.pokemonData.filter(item => item.name == name))
    let pokemonResult = (this.pokemonData.filter(item => item.name == name));
    return (pokemonResult.length > 0) ? pokemonResult[0] : {name: "Pokemon not found"};
   
  }

  getById = (id) => {
    let pokemonResult = (this.pokemonData.filter(item => item.id == id));
    return (pokemonResult.length > 0) ? pokemonResult[0] : {name: "Pokemon not found"};
  }
}
