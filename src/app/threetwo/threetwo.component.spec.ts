import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreetwoComponent } from './threetwo.component';

describe('ThreetwoComponent', () => {
  let component: ThreetwoComponent;
  let fixture: ComponentFixture<ThreetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
