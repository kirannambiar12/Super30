import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTourComponent } from './photo-tour.component';

describe('PhotoTourComponent', () => {
  let component: PhotoTourComponent;
  let fixture: ComponentFixture<PhotoTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
