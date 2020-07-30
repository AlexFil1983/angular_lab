import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonDataService } from 'src/app/pokemon-data.service';
import { Pokemon } from '../pokemon.component';
import { FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { fromEventPattern } from 'rxjs';
import { PokemonSaveComponent } from '../pokemon-save/pokemon-save.component';
import { PokemonCancelComponent } from '../pokemon-cancel/pokemon-cancel.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})

export class PokemonEditComponent implements OnInit {
form: FormGroup;
pokemon: Pokemon;
dialogValue: string;
allowRouterToGetOut: string;
status: string;
formNotTouched: boolean;

  constructor(private route: ActivatedRoute,
    private pokemonDataService: PokemonDataService,
    public dialog: MatDialog,
    private router: Router,
       ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.pokemon = this.pokemonDataService.getById(parseInt(params.id))
        })
    this.formNotTouched = true;
    this.form = new FormGroup({
      name: new FormControl(this.pokemon.name),
      damage: new FormControl(this.pokemon.damage),
      created: new FormControl(this.pokemon.created),
    })
  }

  submit() {
    this.pokemonDataService.onChangePokemon(this.pokemon.id, this.form.value);
  }

  openDialog() {
    if (this.form.value.name.trim().length === 0) {
      this.status = "Enter pokemon name";
      return;
    }

 
this.submit();
    const dialogRef = this.dialog.open(PokemonSaveComponent);
    this.allowRouterToGetOut = 'yes';    
    dialogRef.afterClosed().subscribe(result => this.router.navigate([`/pokemon/${this.pokemon.id}`]));
    
  }

openCancel() {
  this.submit()
  const dialogRef = this.dialog.open(PokemonCancelComponent);
  dialogRef.afterClosed().subscribe(result => {
    this.allowRouterToGetOut = result;
    this.router.navigate([`/pokemon/${this.pokemon.id}`])
  }
    );
   
}

formChanged() {
  this.formNotTouched = false;
}
}