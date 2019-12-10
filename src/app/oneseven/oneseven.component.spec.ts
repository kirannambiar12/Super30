import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesevenComponent } from './oneseven.component';

describe('OnesevenComponent', () => {
  let component: OnesevenComponent;
  let fixture: ComponentFixture<OnesevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
