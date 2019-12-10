import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivetenComponent } from './fiveten.component';

describe('FivetenComponent', () => {
  let component: FivetenComponent;
  let fixture: ComponentFixture<FivetenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivetenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
