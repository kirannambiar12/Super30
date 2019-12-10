import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefiveComponent } from './onefive.component';

describe('OnefiveComponent', () => {
  let component: OnefiveComponent;
  let fixture: ComponentFixture<OnefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
