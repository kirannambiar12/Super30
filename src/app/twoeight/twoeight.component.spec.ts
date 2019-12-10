import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoeightComponent } from './twoeight.component';

describe('TwoeightComponent', () => {
  let component: TwoeightComponent;
  let fixture: ComponentFixture<TwoeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
