import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneeightComponent } from './oneeight.component';

describe('OneeightComponent', () => {
  let component: OneeightComponent;
  let fixture: ComponentFixture<OneeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
