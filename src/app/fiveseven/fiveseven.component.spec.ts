import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivesevenComponent } from './fiveseven.component';

describe('FivesevenComponent', () => {
  let component: FivesevenComponent;
  let fixture: ComponentFixture<FivesevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivesevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
