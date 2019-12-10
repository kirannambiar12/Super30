import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnenineComponent } from './onenine.component';

describe('OnenineComponent', () => {
  let component: OnenineComponent;
  let fixture: ComponentFixture<OnenineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnenineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
