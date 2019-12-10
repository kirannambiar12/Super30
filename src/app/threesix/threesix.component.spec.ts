import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreesixComponent } from './threesix.component';

describe('ThreesixComponent', () => {
  let component: ThreesixComponent;
  let fixture: ComponentFixture<ThreesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
