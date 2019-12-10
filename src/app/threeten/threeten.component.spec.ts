import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreetenComponent } from './threeten.component';

describe('ThreetenComponent', () => {
  let component: ThreetenComponent;
  let fixture: ComponentFixture<ThreetenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreetenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
