import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonItemComponent } from './pokemon/pokemon-item/pokemon-item.component';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';



const routes: Routes = [
  {path: '', component: PokemonComponent },
  {path: 'pokemon/:id', component: PokemonItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
