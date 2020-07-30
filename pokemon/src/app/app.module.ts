import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonCardsComponent } from './pokemon/pokemon-cards/pokemon-cards.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import {PokemonDataService} from './pokemon-data.service';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';
import { PokemonItemComponent } from './pokemon/pokemon-item/pokemon-item.component';
import { PokemonEditComponent } from './pokemon/pokemon-edit/pokemon-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonSaveComponent } from './pokemon/pokemon-save/pokemon-save.component';
import { PokemonCancelComponent } from './pokemon/pokemon-cancel/pokemon-cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonCardsComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonSearchComponent,
    PokemonItemComponent,
    PokemonEditComponent,
    PokemonSaveComponent,
    PokemonCancelComponent
  ],
  entryComponents: [PokemonSaveComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    PokemonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
