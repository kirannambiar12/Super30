import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofiveComponent } from './twofive.component';

describe('TwofiveComponent', () => {
  let component: TwofiveComponent;
  let fixture: ComponentFixture<TwofiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwofiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwofiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
