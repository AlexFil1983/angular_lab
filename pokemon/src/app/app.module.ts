import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonCardsComponent } from './pokemon/pokemon-cards/pokemon-cards.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import {PokemonDataService} from './pokemon-data.service';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';
import { PokemonItemComponent } from './pokemon/pokemon-item/pokemon-item.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonCardsComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonSearchComponent,
    PokemonItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PokemonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
