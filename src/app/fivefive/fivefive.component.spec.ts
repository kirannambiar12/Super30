import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivefiveComponent } from './fivefive.component';

describe('FivefiveComponent', () => {
  let component: FivefiveComponent;
  let fixture: ComponentFixture<FivefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
