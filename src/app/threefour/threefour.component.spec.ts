import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreefourComponent } from './threefour.component';

describe('ThreefourComponent', () => {
  let component: ThreefourComponent;
  let fixture: ComponentFixture<ThreefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
