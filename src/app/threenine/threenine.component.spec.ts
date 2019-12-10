import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreenineComponent } from './threenine.component';

describe('ThreenineComponent', () => {
  let component: ThreenineComponent;
  let fixture: ComponentFixture<ThreenineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreenineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
