import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouroneComponent } from './fourone.component';

describe('FouroneComponent', () => {
  let component: FouroneComponent;
  let fixture: ComponentFixture<FouroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
