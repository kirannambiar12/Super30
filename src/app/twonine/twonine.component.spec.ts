import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwonineComponent } from './twonine.component';

describe('TwonineComponent', () => {
  let component: TwonineComponent;
  let fixture: ComponentFixture<TwonineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwonineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwonineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
