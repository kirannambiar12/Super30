import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoursixComponent } from './foursix.component';

describe('FoursixComponent', () => {
  let component: FoursixComponent;
  let fixture: ComponentFixture<FoursixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoursixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoursixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
