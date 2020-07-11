import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PokemonListComponent implements OnInit {
@Input() pokemon
  constructor() { }

  ngOnInit(): void {
  }

}
