import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwotwoComponent } from './twotwo.component';

describe('TwotwoComponent', () => {
  let component: TwotwoComponent;
  let fixture: ComponentFixture<TwotwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwotwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
