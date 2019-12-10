import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourfiveComponent } from './fourfive.component';

describe('FourfiveComponent', () => {
  let component: FourfiveComponent;
  let fixture: ComponentFixture<FourfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
