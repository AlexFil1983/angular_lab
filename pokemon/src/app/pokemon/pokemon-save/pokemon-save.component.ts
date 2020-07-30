import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-save',
  templateUrl: './pokemon-save.component.html',
  styleUrls: ['./pokemon-save.component.scss']
})
export class PokemonSaveComponent implements OnInit {
@Input() id: number
  constructor() { }

  ngOnInit(): void {
  }

}
