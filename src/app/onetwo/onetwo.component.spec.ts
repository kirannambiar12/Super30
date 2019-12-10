import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetwoComponent } from './onetwo.component';

describe('OnetwoComponent', () => {
  let component: OnetwoComponent;
  let fixture: ComponentFixture<OnetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
