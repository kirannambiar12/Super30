import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeeightComponent } from './threeeight.component';

describe('ThreeeightComponent', () => {
  let component: ThreeeightComponent;
  let fixture: ComponentFixture<ThreeeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
