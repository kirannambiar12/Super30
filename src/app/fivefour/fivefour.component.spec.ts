import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivefourComponent } from './fivefour.component';

describe('FivefourComponent', () => {
  let component: FivefourComponent;
  let fixture: ComponentFixture<FivefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
