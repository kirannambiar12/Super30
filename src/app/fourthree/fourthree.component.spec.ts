import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthreeComponent } from './fourthree.component';

describe('FourthreeComponent', () => {
  let component: FourthreeComponent;
  let fixture: ComponentFixture<FourthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
