import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoureightComponent } from './foureight.component';

describe('FoureightComponent', () => {
  let component: FoureightComponent;
  let fixture: ComponentFixture<FoureightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoureightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoureightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
