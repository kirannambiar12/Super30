import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosevenComponent } from './twoseven.component';

describe('TwosevenComponent', () => {
  let component: TwosevenComponent;
  let fixture: ComponentFixture<TwosevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwosevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
