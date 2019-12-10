import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivenineComponent } from './fivenine.component';

describe('FivenineComponent', () => {
  let component: FivenineComponent;
  let fixture: ComponentFixture<FivenineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivenineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
