import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveeightComponent } from './fiveeight.component';

describe('FiveeightComponent', () => {
  let component: FiveeightComponent;
  let fixture: ComponentFixture<FiveeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
