import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnethreeComponent } from './onethree.component';

describe('OnethreeComponent', () => {
  let component: OnethreeComponent;
  let fixture: ComponentFixture<OnethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
