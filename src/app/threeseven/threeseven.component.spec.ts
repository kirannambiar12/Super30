import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreesevenComponent } from './threeseven.component';

describe('ThreesevenComponent', () => {
  let component: ThreesevenComponent;
  let fixture: ComponentFixture<ThreesevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreesevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
