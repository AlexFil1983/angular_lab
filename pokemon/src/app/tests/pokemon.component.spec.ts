import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { By } from '@angular/platform-browser';
import { PokemonSearchComponent } from '../pokemon/pokemon-search/pokemon-search.component'


describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let button;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.debugElement.query(By.css('button'));
    el = button.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a button', () => {
    expect(el.textContent).toBe('Switch to card view');
  })

it('button should change toggle state on click', () => {
   button.triggerEventHandler('click');
   expect(component.toggle).toBeFalsy();
   
  })

it('button should change name from card view to list view', () => {
  button.triggerEventHandler('click');
  fixture.detectChanges();
  expect(el.textContent).toBe('Switch to list view')
})
});
