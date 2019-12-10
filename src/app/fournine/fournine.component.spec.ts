import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournineComponent } from './fournine.component';

describe('FournineComponent', () => {
  let component: FournineComponent;
  let fixture: ComponentFixture<FournineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
