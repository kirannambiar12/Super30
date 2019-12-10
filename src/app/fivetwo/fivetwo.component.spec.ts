import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivetwoComponent } from './fivetwo.component';

describe('FivetwoComponent', () => {
  let component: FivetwoComponent;
  let fixture: ComponentFixture<FivetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
