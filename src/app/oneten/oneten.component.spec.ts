import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetenComponent } from './oneten.component';

describe('OnetenComponent', () => {
  let component: OnetenComponent;
  let fixture: ComponentFixture<OnetenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
