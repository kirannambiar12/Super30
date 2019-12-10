import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourfourComponent } from './fourfour.component';

describe('FourfourComponent', () => {
  let component: FourfourComponent;
  let fixture: ComponentFixture<FourfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
