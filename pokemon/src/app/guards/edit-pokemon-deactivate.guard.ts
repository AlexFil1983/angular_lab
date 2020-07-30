import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonCancelComponent } from '../pokemon/pokemon-cancel/pokemon-cancel.component';
import { PokemonEditComponent} from '../pokemon/pokemon-edit/pokemon-edit.component'

@Injectable({
  providedIn: 'root'
})
export class EditPokemonDeactivateGuard implements CanDeactivate<PokemonEditComponent> {
  canDeactivate(
    component: PokemonEditComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if (component.allowRouterToGetOut == 'yes') {
         return true
       } else return false
  }
  
}
