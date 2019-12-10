import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDisComponent } from './home-dis.component';

describe('HomeDisComponent', () => {
  let component: HomeDisComponent;
  let fixture: ComponentFixture<HomeDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
