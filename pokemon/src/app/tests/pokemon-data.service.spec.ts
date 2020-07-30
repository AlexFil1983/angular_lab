import { PokemonDataService } from '../pokemon-data.service';

let service;

beforeEach(() => {
    service = new PokemonDataService()
})

it('should get data from service', () => {
    expect(service.pokemonData[0].name).toBe('Bulbasaur')
})

it('should return pokemon with specific name', () => {
    expect(service.getByName('charmander')).toEqual([{name: 'Charmander', id: 4, damage: 43, catched: false, created: '2014-07-26' }])
})