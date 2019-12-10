import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeoneComponent } from './threeone.component';

describe('ThreeoneComponent', () => {
  let component: ThreeoneComponent;
  let fixture: ComponentFixture<ThreeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
