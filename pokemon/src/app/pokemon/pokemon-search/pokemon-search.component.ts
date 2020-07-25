import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {


@Output() onSearchPokemon: EventEmitter<string>  = new EventEmitter()
  constructor() { }
  status = '' 

  form: FormGroup
  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('')
    })
  }
 
  submit() {
    this.status = '';
    if (this.form.controls.search.value.trim().length > 0)  {
      this.onSearchPokemon.emit(this.form.controls.search.value);
    } else {
      this.status = "Just enter something";
    }
  }

 
}
