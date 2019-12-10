import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofourComponent } from './twofour.component';

describe('TwofourComponent', () => {
  let component: TwofourComponent;
  let fixture: ComponentFixture<TwofourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwofourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwofourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
