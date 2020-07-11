import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonCardsComponent } from './pokemon/pokemon-cards/pokemon-cards.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import {PokemonDataService} from './pokemon-data.service';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonCardsComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PokemonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
