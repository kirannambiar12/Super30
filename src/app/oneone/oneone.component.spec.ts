import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneoneComponent } from './oneone.component';

describe('OneoneComponent', () => {
  let component: OneoneComponent;
  let fixture: ComponentFixture<OneoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
