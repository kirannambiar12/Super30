import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtwoComponent } from './fourtwo.component';

describe('FourtwoComponent', () => {
  let component: FourtwoComponent;
  let fixture: ComponentFixture<FourtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
