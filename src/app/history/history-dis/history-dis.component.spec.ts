import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDisComponent } from './history-dis.component';

describe('HistoryDisComponent', () => {
  let component: HistoryDisComponent;
  let fixture: ComponentFixture<HistoryDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
