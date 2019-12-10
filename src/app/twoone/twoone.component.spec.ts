import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwooneComponent } from './twoone.component';

describe('TwooneComponent', () => {
  let component: TwooneComponent;
  let fixture: ComponentFixture<TwooneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwooneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
