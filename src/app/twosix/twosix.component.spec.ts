import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosixComponent } from './twosix.component';

describe('TwosixComponent', () => {
  let component: TwosixComponent;
  let fixture: ComponentFixture<TwosixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwosixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
