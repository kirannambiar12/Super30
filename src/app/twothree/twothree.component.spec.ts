import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwothreeComponent } from './twothree.component';

describe('TwothreeComponent', () => {
  let component: TwothreeComponent;
  let fixture: ComponentFixture<TwothreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwothreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwothreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
