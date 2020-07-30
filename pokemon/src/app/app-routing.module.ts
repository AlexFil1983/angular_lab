import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonItemComponent } from './pokemon/pokemon-item/pokemon-item.component';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';
import { PokemonEditComponent } from './pokemon/pokemon-edit/pokemon-edit.component';
import { EditPokemonDeactivateGuard } from './guards/edit-pokemon-deactivate.guard'



const routes: Routes = [
  {path: '', component: PokemonComponent },
  {path: 'pokemon/:id', component: PokemonItemComponent},
  {path: 'edit/:id', component: PokemonEditComponent,
canDeactivate: [EditPokemonDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
