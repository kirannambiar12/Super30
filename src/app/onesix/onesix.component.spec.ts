import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesixComponent } from './onesix.component';

describe('OnesixComponent', () => {
  let component: OnesixComponent;
  let fixture: ComponentFixture<OnesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
