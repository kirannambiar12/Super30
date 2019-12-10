import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreefiveComponent } from './threefive.component';

describe('ThreefiveComponent', () => {
  let component: ThreefiveComponent;
  let fixture: ComponentFixture<ThreefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
