import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTaleComponent } from './media-tale.component';

describe('MediaTaleComponent', () => {
  let component: MediaTaleComponent;
  let fixture: ComponentFixture<MediaTaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
