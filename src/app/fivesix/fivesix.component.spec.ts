import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivesixComponent } from './fivesix.component';

describe('FivesixComponent', () => {
  let component: FivesixComponent;
  let fixture: ComponentFixture<FivesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
