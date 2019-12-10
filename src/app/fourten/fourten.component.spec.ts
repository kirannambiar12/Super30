import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtenComponent } from './fourten.component';

describe('FourtenComponent', () => {
  let component: FourtenComponent;
  let fixture: ComponentFixture<FourtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
