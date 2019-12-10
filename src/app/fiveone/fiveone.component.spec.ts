import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveoneComponent } from './fiveone.component';

describe('FiveoneComponent', () => {
  let component: FiveoneComponent;
  let fixture: ComponentFixture<FiveoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
