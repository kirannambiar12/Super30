import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefourComponent } from './onefour.component';

describe('OnefourComponent', () => {
  let component: OnefourComponent;
  let fixture: ComponentFixture<OnefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
