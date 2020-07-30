import { TestBed } from '@angular/core/testing';

import { EditPokemonDeactivateGuard } from './edit-pokemon-deactivate.guard';

describe('EditPokemonDeactivateGuard', () => {
  let guard: EditPokemonDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditPokemonDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
