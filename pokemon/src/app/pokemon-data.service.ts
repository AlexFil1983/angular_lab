import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor() { }
  
  pokemonData = [
    {name: 'Bulbasaur', id: 1, damage: 20, catched: false, created: '01.02.2001' },
    {name: 'Ivysaur', id: 2, damage: 55, catched: false, created: '02.04.2003' },
    {name: 'Venusaur', id: 3, damage: 36, catched: false, created: '04.05.2010' },
    {name: 'Charmander', id: 4, damage: 43, catched: false, created: '12.07.2006' },
    {name: 'Charmeleon', id: 5, damage: 67, catched: false, created: '13.04.2007' },
    {name: 'Charizard', id: 6, damage: 53, catched: false, created: '25.10.2010' },
    {name: 'Squirtle', id: 7, damage: 23, catched: false, created: '27.02.2007' },
    {name: 'Wartortle', id: 8, damage: 44, catched: false, created: '07.08.2006' },
    {name: 'Blastoise', id: 9, damage: 51, catched: false, created: '06.04.2013' },
    {name: 'Caterpie', id: 10, damage: 60, catched: false, created: '05.10.2015' },
    {name: 'Metapod', id: 11, damage: 56, catched: false, created: '12.11.2017' },
    {name: 'Butterfree', id: 12, damage: 15, catched: false, created: '18.04.2019'},
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
}
