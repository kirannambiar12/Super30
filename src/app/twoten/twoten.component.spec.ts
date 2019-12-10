import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwotenComponent } from './twoten.component';

describe('TwotenComponent', () => {
  let component: TwotenComponent;
  let fixture: ComponentFixture<TwotenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwotenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwotenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
