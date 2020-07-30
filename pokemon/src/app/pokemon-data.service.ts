import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor() { }
  
  pokemonData = [
    {name: 'Bulbasaur', id: 1, damage: 20, catched: false, created: '2002-03-22' },
    {name: 'Ivysaur', id: 2, damage: 55, catched: false, created: '2012-04-11' },
    {name: 'Venusaur', id: 3, damage: 36, catched: false, created: '2001-12-01' },
    {name: 'Charmander', id: 4, damage: 43, catched: false, created: '2014-07-26' },
    {name: 'Charmeleon', id: 5, damage: 67, catched: false, created: '2020-07-12' },
    {name: 'Charizard', id: 6, damage: 53, catched: false, created: '2020-04-09' },
    {name: 'Squirtle', id: 7, damage: 23, catched: false, created: '2018-03-16' },
    {name: 'Wartortle', id: 8, damage: 44, catched: false, created: '2019-03-21' },
    {name: 'Blastoise', id: 9, damage: 51, catched: false, created: '2009-07-22' },
    {name: 'Caterpie', id: 10, damage: 60, catched: false, created: '2020-07-21' },
    {name: 'Metapod', id: 11, damage: 56, catched: false, created: '2020-07-24' },
    {name: 'Butterfree', id: 12, damage: 15, catched: false, created: '2020-07-25'},
  ];

  getAll = () => {
    return (this.pokemonData);
  }

  getByName = (name) => {
    return (this.pokemonData.filter(item => item.name.toLowerCase().includes(name.toLowerCase())));
  }

  getById = (id) => {
    return this.pokemonData.find(item => item.id == id);
  }

  onCatchPokemon = (id) => {
    let pokemon = this.pokemonData.find(pokemon => pokemon.id === +id);
    pokemon.catched = !pokemon.catched;
    console.log(`${pokemon.name} был ${pokemon.catched ? "пойман" : "отпущен"} `);
  }

  onChangePokemon = (id, obj) => {
    let pokemon = this.pokemonData.find(pokemon => pokemon.id === +id);
    pokemon.name = obj.name;
    pokemon.damage = obj.damage;
    pokemon.created = obj.created;

  }

}
