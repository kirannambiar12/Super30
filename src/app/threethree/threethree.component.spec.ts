import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreethreeComponent } from './threethree.component';

describe('ThreethreeComponent', () => {
  let component: ThreethreeComponent;
  let fixture: ComponentFixture<ThreethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
