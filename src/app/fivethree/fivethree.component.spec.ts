import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivethreeComponent } from './fivethree.component';

describe('FivethreeComponent', () => {
  let component: FivethreeComponent;
  let fixture: ComponentFixture<FivethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
